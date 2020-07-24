---
tags:
- oracle 11g
- sql
featuredimg: "/assets/img/oracle-database-logo.png"
title: Oracle DBの日付型についてまとめ
date: 2020-04-15T00:00:00.000+09:00
summary: oracleの日付型まとめ

---
Oracle11g以降の情報。

タイムスタンプ型に「TIMESTAMP」「TIMESTAMP WITH TIME ZONE」「TIMESTAMP WITH LOCAL TIME ZONE」の3種類あるのがややこしいポイント。

ここでOracleSQLを色々試せる。

[https://livesql.oracle.com/](https://livesql.oracle.com/ "https://livesql.oracle.com/")

## 日付型の種類

| データ型 | 説明 |
| --- | --- |
| DATE | 年月日＋時分秒 |
| TIMESTAMP | 年月日＋時分秒＋少数秒 |
| TIMESTAMP WITH TIME ZONE | TIMESTAMP ＋　タイムゾーン |
| TIMESTAMP WITH LOCAL TIME ZONE | DBのタイムゾーンで補完されたTIMESTAMP |

## 現在時刻の取得

| 関数 | 説明 |
| --- | --- |
| sysdate | OSの現在日時をDATE型で取得できる。 |
| current_date | セッションのタイムゾーンでの現在日時をDATE型で取得できる。 |
| systimestamp | OSの現在日時をtimestamp型で取得できる。 |
| current_timestamp | セッションのタイムゾーンでの現在日時をタイムゾーン付きのtimestamp型で取得できる。 |
| localtimestamp | セッションのタイムゾーンでの現在日時をタイムゾーンなしのtimestamp型で取得できる。 |

## 文字列からの変換

### 文字列⇛DATE型 TO_DATE

TO_DATE(変換対象の文字列, 変換元の日付フォーマット)

``` sql
例
SELECT TO_DATE('2020/04/15 09:00:10','YYYY/MM/DD HH24:MI:SS') FROM DUAL;
```

### 文字列⇛TIMESTAMP型 TO_TIMESTAMP

TO_TIMESTAMP(変換対象の文字列, 変換元の日付フォーマット)

``` sql
例
SELECT TO_TIMESTAMP('2020/04/15 09:00:10','YYYY/MM/DD HH24:MI:SS') FROM DUAL;
```

### 文字列⇛TIMESTAMP WITH TIME ZONE型 TO_TIMESTAMP_TZ

TO_TIMESTAMP_TZ(変換対象のタイムゾーン付き文字列, 変換元の日付フォーマット)

``` sql
例
SELECT TO_TIMESTAMP('2020/04/15 09:00:10 +09:00','YYYY/MM/DD HH24:MI:SS TZH:TZM') FROM DUAL;
```

## 日付型の四則演算

### 日付型からn日を加算・除算

date型でもtimestamp型でも同じようにn/24で時間を足し引き出来る。

``` sql
例
SELECT systimestamp - 1 FROM DUAL;
SELECT sysdate - 1 FROM DUAL;
```

### 日付型からn時間を加算・除算

date型でもtimestamp型でも同じようにn/24で時間を足し引き出来る。

``` sql
例
SELECT systimestamp - 1/24 FROM DUAL;
SELECT sysdate - 1/24 FROM DUAL;
```

## 日付型同士の計算

日付同士を引き算したり、日付から日数や時間を引いたり。

    SELECT to_date('20200725', 'yyyymmdd') - to_date('20200724', 'yyyymmdd') FROM DUAL; // result: 1
    SELECT to_date('20200725', 'yyyymmdd') - 1 FROM DUAL; // result: 24-JUL-20
    SELECT to_char(to_date('2020-07-25 09:00', 'yyyy-MM-dd HH24:mi') - 1/24, 'yyyy-MM-dd HH24:mi') FROM DUAL; // 2020-07-25 08:00

## 日付型の比較

    SELECT 1 FROM DUAL WHERE to_date('2020-07-25 09:00', 'yyyy-MM-dd HH24:mi') > to_date('2020-07-25 08:00', 'yyyy-MM-dd HH24:mi'); // result: 1
    SELECT 1 FROM DUAL WHERE to_date('2020-07-25 09:00', 'yyyy-MM-dd HH24:mi') < to_date('2020-07-25 08:00', 'yyyy-MM-dd HH24:mi'); // no result;
    SELECT 1 FROM DUAL WHERE '20207-25 09:00' > '2020-07-25 08:00'; // result: 1
    SELECT 1 FROM DUAL WHERE '20207-25 09:00' < '2020-07-25 08:00'; // no result;