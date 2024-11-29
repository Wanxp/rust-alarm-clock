# dockerfile amd46

FROM ivangabriele/tauri:debian-bookworm-22

RUN npm config set registry https://mirrors.cloud.tencent.com/npm/
ENV https_proxy=http://127.0.0.1:19999
ENV http_proxy=http://127.0.0.1:19999

CMD pnpm tauri build
