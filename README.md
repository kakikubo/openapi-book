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
