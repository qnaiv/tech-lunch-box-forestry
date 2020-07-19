---
tags:
- oracle 11g
- sql
featuredimg: "/assets/img/oracle-database-logo.png"
title: Oracle DBの日付型についてまとめ
date: 2020-04-15 00:00:00 +0900
summary: oracleの日付型まとめ

---
Oracle11g以降の情報。

## 日付型の種類
|データ型|説明|
|--|--|
|DATE|年月日＋時分秒|
|TIMESTAMP|年月日＋時分秒＋少数秒|
|TIMESTAMP WITH TIME ZONE|TIMESTAMP ＋　タイムゾーン|
|TIMESTAMP WITH LOCAL TIME ZONE|DBのタイムゾーンで補完されたTIMESTAMP|

## 現在時刻の取得
| 関数 | 説明 |
|--|--|
| sysdate	 | OSの現在日時をDATE型で取得できる。 |
| current_date	 | セッションのタイムゾーンでの現在日時をDATE型で取得できる。 |
| systimestamp	 | OSの現在日時をtimestamp型で取得できる。 |
| current_timestamp	 | セッションのタイムゾーンでの現在日時を**タイムゾーン付き**のtimestamp型で取得できる。 |
| localtimestamp	 | セッションのタイムゾーンでの現在日時を**タイムゾーンなし**のtimestamp型で取得できる。 |

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
WIP

## 日付型の比較
WIP