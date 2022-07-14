FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:18-bullseye
RUN su node -c "npm i -g @nestjs/cli"
