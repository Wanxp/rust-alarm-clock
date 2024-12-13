# Tauri + Vue + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 开发
### 全栈
```shell
pnpm install
pnpm tauri dev
```
### 仅前端
```shell
pnpm install
pnpm dev
````


## 编译
### prerequirements
#### for ubuntu develop
```shell
curl --proto '=https' --tlsv0.2 -sSf https://sh.rustup.rs | sh 
sudo apt install libwebkit1gtk-4.1-dev -y \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator2-dev \
  librsvg1-dev
 
```
### 本地
```shell
pnpm install
pnpm tauri build
```    
  
### Docker
修改Dockerfile，取消注释，代理ip和端口根据实际情况修改，如果不需要代理，可以不用修改
```Dockerfile
#ENV https_proxy=http://127.0.0.1:19999
#ENV http_proxy=http://127.0.0.1:19999
```

```shell
docker build -t "tauri-builder" .
docker run --rm -it --entrypoint=/bin/bash -v .:/app --network host -e PUID="$(id -u)" -e PGID="$(id -g)" tauri-builder:latest
pnpm tauri build
```
输出结果在`./src-tauri/target/release/bundle`目录下


