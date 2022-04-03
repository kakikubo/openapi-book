# openapi-book

openapiのサンプル集とOpenAPI関連の情報を掲載します。

## Swagger Editor

* Swagger Codegen
* Swagger UI
* Swagger Editor

これら3つの機能を有する。

### Swagger Editor の起動方法

* ここから最新版を確認できます
  * https://github.com/swagger-api/swagger-editor/releases

簡単なのは Docker経由での起動

```bash
docker run -d -p 80:8080 --name editor swaggerapi/swagger-editor:v4.2.2
```

Makefileに記載してあるので、以下で起動可能

```bash
make swagger
```

http://openpi.lvh.me
ここでSwagger Editorを使える。

## [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)

VS Code で上記をインストールしておく。

### サンプルの配置

https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.yaml
上記からダウンロードして `openapi.yaml` として配置する。
VS Codeで開いたら、`Shift + Alt + P` で `Swagger Viewer`を起動する事ができる。

## OpenAPI generatorを利用する
## 参考リンク

* [OpenAPI Specification 3.0.3](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md)


## 速習YAML

### ◆ハッシュ

キーとバリューは「":"(コロン)」でつなぎます。また、キーとバリューの間には半角スペースを1つ以上入れます。

```yaml
key: value
```

```json
{ key: value }
```


### ◆配列

配列は「"-"(ハイフン)」で表現します。「"-"(ハイフン)」1つが1要素になります。

```yaml
key:
  - value1
  - value2
  …
```

```json
key: [value1, value2, ...]
```


### ◆ハッシュのネスト

インデント数とオブジェクトの兄弟が同じ意味を持ちます。ネストする場合、インデント数に注意してください。

YAML

```yaml
parent_key:
  child_key1: child_value1
  child_key2: child_value2
```

```json
parent_key: {
  child_key1: child_value1,
  child_key2: child_value2
}
```


### ◆配列のネスト

配列が「"-"(ハイフン)」で表現されること、兄弟が同じ数の半角スペースインデントで表現されることを組み合わせて表現します。

```yaml
parent_key:
  -
    - value1
    - value2
  -
    - valueA
    - valueB
```

```json
parent_key: [
  [ value1, value2 ],
  [ valueA, valueB ]
]
```

### ◆配列内のハッシュ

配列は「"-"(ハイフン)」で表現されますが、その要素としてオブジェクトをとる場合、配列要素となるオブジェクトのプロパティ位置および「"-"(ハイフン)」の有無に注意します。

```yaml
parent_key:
  - child_key1: child_value1
    child_key2: child_value2
```

```json
parent_key: [{
    child_key1: child_value1,
    child_key2: child_value2
  }]
```


### ◆長文（コードのような改行付きの長い文字列を入れたい場合）

バリューに改行ありの長文を入れたいケース（コマンド群やソースコードなどを入れるような―ケース）の場合、「"|"(パイプ)」に続けてデータを記載します。

```yaml
key: |
  hobe
  foo
  bar
```

```json
{
  key: `hoge
foo
bar`
}
```

### ◆複数YAMLの結合（1ファイルに複数のYAMLを含めたい場合）

YAMLは1ファイルに複数定義を入れることができます。複数の定義を行いたい場合、その境界は「"---"(ハイフン3つ)」で仕切ります。

```yaml
key1: value1
---
key2: value2
```

```json
{ key1: value1 }
{ key2: value2 }
```

## データ型

* interger 整数 format指定可能
* number 浮動小数 format指定可能
* string 文字列 format指定可能
* boolean 真偽値
* object オブジェクト
* array 配列

### format

* integer
  * int32 符号付き32ビット整数
  * int64 符号付き64ビット整数
* number
  * float 浮動小数
  * double 倍精度浮動小数
* string
  * (何も指定しない) 文字列
  * byte Base64エンコードされた文字列
  * binary バイナリ
  * date 日付(YYYY-MM-DD形式)の文字列 RFC3339
  * date-time 日時(YYYY-MM-DDThh:mm:ssTZD形式)の文字列 RFC3339
  * email メールアドレスを示す文字列 RFC5322
  * hostname ホスト名を示す文字列 RFC1123
  * ipv4 "."ピリオドで区切られたIPV4アドレス文字列 RFC2673
  * uri URIフォーマットに従った文字列 RFC3986
  * uuid UUID文字列 RFC4122

## ルートオブジェクト

`RESTAPI/openapi-rootobject.yaml` を参照の事

* openapi: "3.0.3"
  * 必須 OpenAPIのバージョン番号を指定する
* info:
  * 必須 APIのメタ情報
* servers:
  * APIを提供するサーバーを定義する
* tags:
  * APIを分類するタグを定義する
* paths:
  * 必須 APIとして利用可能なパスおよび操作を定義する
* security:
  * API全体にかかるセキュリティ要件
* components:
  * OpenAPIの中で利用するさまざまなオブジェクトをコンポーネント化して再利用可能にする

## メタデータ

* title
  * 必須 APIのタイトルを指定
* description
  * 詳細説明を記載する。マークダウンで記述ができる
* version
  * APIドキュメントのバージョン情報
* OpenなAPIを定義する際に必須となる項目
  * termsOfService
    * サービス利用規約のURL
  * contact
    * 連絡先情報
    * name: "customer support"
    * url:  https://example.com/support"
    * email: "support@example.com"
  * license
    * ライセンス情報を定義する。[SPDX](https://spdx.org/licenses/)を参考にするとよい 
    * name "MIT License"
    * url: "https://opensource.org/licenses/MIT"