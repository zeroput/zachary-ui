
# init the project folder tree

```
npm i react typescript @types/react ts-lib --save-dev
```


will cpy later 


rollup
```
npm i rollup
npm i @rollup/plugin-commonjs
npm i @rollup/plugin-typescript
npm i @rollup/plugin-node-resolve
npm i rollup-plugin-dts
npm i @rollup/plugin-terser
npm i rollup-plugin-peer-deps-external
```


npm set back the registry:
```
https://registry.npmmirror.com/
```

要将 npm 的镜像源设置为阿里云镜像，可以使用以下命令：

```bash
npm config set registry https://registry.npmmirror.com/
```

如果你想将镜像源切换回 npm 的官方镜像，可以使用以下命令：

```bash
npm config set registry https://registry.npmjs.org/
```

这些命令会分别将 npm 的注册表设置为阿里云镜像或官方镜像。如果你希望查看当前的注册表设置，可以使用：

```bash
npm config get registry
```

这会显示当前配置的注册表 URL。

设置成默认镜像之后，使用npm login 登录一下，类似docker login的登录

---

即使你使用了全局代理配置，npm 可能仍然需要独立配置代理设置。这是因为 npm 在网络请求时可能不会自动继承系统的全局代理设置。配置 npm 的代理可以确保 npm 直接使用你指定的代理服务器。

### 为什么需要配置 npm 代理

1. **npm 特定配置**: npm 有自己的配置系统，它可以独立于操作系统的全局代理设置。即使系统级别的代理设置正确，npm 可能还是需要明确指定代理设置。

2. **代理认证**: 如果你的代理服务器需要认证，npm 可能需要额外的配置来正确传递这些认证信息。

3. **网络环境**: 在一些复杂的网络环境中（如公司网络），代理可能会有额外的配置要求，npm 需要独立配置来适应这些要求。

### 如何配置 npm 代理

如果你已经有一个全局代理设置，但 npm 仍然需要配置，可以使用以下命令：

#### 1. 设置代理

```bash
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

#export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890

```

- `username` 和 `password` 是你的代理认证信息（如果需要）。
- `your-proxy-address` 和 `port` 是你的代理服务器地址和端口。

#### 2. 如果不使用代理

如果你想确保 npm 不使用代理，可以清除代理设置：

```bash
npm config delete proxy
npm config delete https-proxy
```

#### 3. 检查配置

确认代理设置是否生效，可以使用以下命令查看当前配置：

```bash
npm config get proxy
npm config get https-proxy
```

### 额外步骤

如果你已经配置了 npm 的代理，但仍然遇到问题，可以尝试以下步骤：

- **清除缓存**: 清理 npm 缓存可能有助于解决一些问题：

  ```bash
  npm cache clean --force
  ```

- **检查网络连接**: 确保网络连接没有问题，代理服务器能够正常访问 npm 的注册表。

- **检查日志**: 如果仍然遇到错误，查看 npm 的日志文件可能会提供更多的诊断信息。

- **更新 npm**: 确保你的 npm 版本是最新的，有时候更新 npm 也可以解决一些网络相关的问题。

希望这些步骤能帮助你解决代理配置的问题。如果还有疑问或问题，请提供具体的错误信息，以便进一步诊断。


---

PUBLISH CMD
```
npm publish --access public
```