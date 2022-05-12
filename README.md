# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### i18n

If you want to start the local development server using a different locale than the default, you can specify the locale in a parameter like this:
```
npm run start -- --locale zh
```

You will then be able to access that locale by appending it to the URL: http://localhost:3000/zh/

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ export GIT_USER=<Your GitHub username>
$ export USE_SSH=true
$ yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
