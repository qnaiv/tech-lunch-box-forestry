---
tags:
- spring boot
- java
title: Spring bootでイベントハンドリングを実装する
date: 2019-07-11 15:00:00 +0000
featuredimg: "/assets/img/spring.png"
summary: spring bootの@EventListnerについて。

---

# Spring bootでイベントハンドリングを実装する

Spring Bootのイベントハンドリング機能を使うと手軽にpublisher-subscriberモデルを実装できる。

## 今回作るサンプル
[https://github.com/qnaiv/spring-event-handling](https://github.com/qnaiv/spring-event-handling
)

TODOが作成されたらお知らせする。


## 処理の流れ
1. TODOを作成処理のあとに`TodoCreated`イベントを発行する。
2. イベントが発行されたら、`NoticeService#handleEvent(TodoCreated event)`メソッドが自動で実行される。

## 実装
### 1. Eventを作成
``` java
@Getter
@EqualsAndHashCode
public class TodoCreated extends ApplicationEvent{

    private static final long serialVersionUID = 1L;
    private String todoId;
    private String text;

    public TodoCreated(Object source, String todoId, String text) {
        super(source);
        this.todoId = todoId;
        this.text = text;
        
    }
}
```
ポイント
- `ApplicationEvent`を継承する

### 2. Subscriber(イベントを購読する側)を実装する

``` java
@Service
public class NoticeService {

    @EventListener
    public void eventHandle(TodoCreated event){
        System.out.println("作成されました [TODO ID: " + event.getTodoId() + " / 内容: " + event.getText() + "]");
        
    }
}
```
ポイント:
- `@EventListener`アノテーションをつける
- メソッドの引数を、購読したいEventクラスにする

### 3. Publisher(イベントを発行する側)を実装する
```java
@RestController
public class TodoController {

    @Autowired ApplicationEventPublisher publisher;
    @GetMapping(value="")
    public String createTodo() {
        publisher.publishEvent(new TodoCreated(this, "1", "買い物に行く"));
        return "Todo created";
    }
    
}
```
ポイント:
- `ApplicationEventPublisher`をAutowiredする
- TODO作成処理の後にメソッド`ApplicationEventPublisher#publishEvent(ApplicationEvent event)`を実行する。