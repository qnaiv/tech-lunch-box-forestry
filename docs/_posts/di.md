---
tags:
- architecture
featuredimg: "/assets/img/20200716-lunchbox-feature-image.png"
title: DI(依存性の注入)について
date: 2020-04-10T00:00:00.000+09:00
summary: DIについての解説

---
様々なアプリケーションフレームワークで用いられているDI(Dependency Injection)についてまとめてみる。

## DIとは

DI(依存性の注入)とは、コンポーネントが中で使っている他のコンポーネントを、**外部から受け取る**ようにする仕組み。

## 具体的な実装イメージ

例えば動画を取得して再生できるVideoPlayerクラスで表すと…

### DIしない例

VideoPlayerは、動画を取得するためにVideoRepositoryを利用(依存)している。
そのため、VideoRepositoryインスタンスを自分の中で生成している。

``` java
class VideoPlayer{
	// 自分でVideoRepositoryインスタンスを生成。
	private VideoRepository repo = new VideoRepository();
	public void play(String id){
		Video video = repo.getVideo(id);
		video.play();
	}
}

class Application(){
	public static void main(String[] args) {
		VideoPlayer player = new VideoPlayer();
		player.play("omosiroi_douga_id");
    }
}
```

### DIする例

VideoRepositoryインスタンスを自前で用意せず、コンストラクタの引数で外部から受け取る。

``` java
class VideoPlayer{
	private VideoRepository repo;
	// 依存しているコンポーネントを外部から注入してもらう！
	public VideoPlayer(VideoRepository repo){
		this.repo = repo;
	}
	public void play(String id){
		Video video = repo.getVideo(id);
		video.play();
	}
}

class Application(){
	public static void main(String[] args) {
		// VideoPlayerインスタンス生成時にVideoRepositoryを注入する！
		VideoPlayer player = 
			new VideoPlayer(new VideoRepository());
		player.play("omosiroi_douga_id");
    }
}
```

## DIすると何がうれしい？

### 単体テストしやすい

依存するコンポーネントを外から注入できるので、モックオブジェクトを注入することができる。
そのため、テストする範囲を限定させることができる。

例えば先程のVideoPlayer#playの単体テストをしようとしたとき、
DIしない例ではVideoPlayer#playを動かすとVideoRepository#getVideoまで実行されてしまい、テストの際に考慮する範囲が広くなってしまう。

DIにして、VideoRepositoryの代わりにモックを注入すれば、VideoPlayer#playのテストのみを実施できる。

``` java
class TestVideoPlayer{
	public void test(){
		VideoPlayer player = 
			new VideoPlayer(new MockVideoRepository());
		player.play("test");
	}
}
class MockVideoRepository extends VideoRepository{
	public Video getVideo(String id){
		// DBに検索しにいかず、固定でVideoを返すモック
		return new Video();
	}
}
```

### 疎結合

外からコンポーネントを注入できることで、流用性を高められる。
例えば、

* youtubeから動画を取得するYoutubeVideoRepository
* ニコニコ動画から動画を取得するNiconicoVideoRepository

があるとする。

DIなしだと以下のようになり、両方に対応したプレーヤーが作れない。

``` java
class VideoPlayer{
	// ニコニコ動画を再生するにはもう1種類のVideoPlayerが必要。。。
	private VideoRepository repo = new YoutubeVideoRepository();
	public void play(String id){
		Video video = repo.getVideo(id);
		video.play();
	}
}
```

DIありなら、VideoPlayerの利用者がどちらのRepositoryを渡すかで、同じVideoPlayerを使い回せる。

``` java
class VideoPlayer{
	private VideoRepository repo;
	public VideoPlayer(VideoRepository repo){
		this.repo = repo;
	}
	public void play(String id){
		Video video = repo.getVideo(id);
		video.play();
	}
}

class Application(){
	public static void main(String[] args) {
		VideoPlayer youtubePlayer = 
			// youtubeから取得！
			new VideoPlayer(new YoutubeVideoRepository());
		youtubePlayer.play("youtube douga");

		VideoPlayer niconicoPlayer =
			// ニコニコから取得！ 
			new VideoPlayer(new NiconicoVideoRepository());
		niconicoPlayer.play("niconico douga");
    }
}
```

## フレームワークのDI機能

フレームワークによっては、設定ファイルやアノテーションで定義するだけで自動的にDIを行える。

例えば、Springでは@Autowiredアノテーションを用いる。

``` java
@Component
class VideoPlayer{
	@Autowired
	VideoRepository repo;
	
	public void play(String id){
		Video video = repo.getVideo(id);
		video.play();
	}
}
```

仕組みとしては以下の図のようになっている。
\[図\]
アプリケーション起動時に、@Component等のアノテーションがついている全てのクラスのインスタンスを生成して、DIコンテナという場所に格納する。
そして@Autowiredが書かれたクラスに対して、DIコンテナからインスタンスを取り出して注入するのだ。

## DIコンテナ

DIコンテナ機能ではアプリ内で一つのインスタンスを使い回すため、メモリの節約にもなる。

逆に注意しないといけない点として、**DI登録するコンポーネントには絶対に値を保持しないこと**。
インスタンスが使い回されるため、保持している値がどこで変更されるか分からなくなる。