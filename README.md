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
