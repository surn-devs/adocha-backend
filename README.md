# Development
## Requirements
The following setup is highly recommended:
- [Docker](https://www.docker.com/products/docker-desktop/)
- [VS Code](https://code.visualstudio.com/)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for VS Code

When you open this project in VS Code with the extension enabled, an option should pop up to reopen the folder in a container. If it isn't shown, open the VS Code command pallette and select *Remote-Containers: Open Folder in Container*. You will now reopen the folder in the container and VS Code will install all of the necessary dependencies and plugins.

## Installation
The *Remote - Containers* extension should install the package's dependencies by default. If you are seeing any errors or aren't using the extension, you can set up the project with this command:
```bash
$ npm install
```

## Run the project
To start project compilation in watch mode use the following command:
```bash
$ npm run dev
```

The server should be available under [localhost:3000](http://localhost:3000/api/v1).

## Linting, formatting and testing
The following commands are used for respectively linting, formatting, testing and testing with coverage:
```bash
$ npm run lint     # Report formatting errors
$ npm run format   # Automatically fix formatting errors
$ npm run test     # Run E2E tests
$ npm run test:cov # Run E2E tests with coverage
```

Build, lint and tests must pass before you are able to merge into the main branch.

# Production deployment
The `Dockerfile` in the root of the project is used for production deployment. You can run the production version of the server yourself using Docker Compose from your host OS:
```bash
$ docker compose up # Used from outside of the dev container
```
