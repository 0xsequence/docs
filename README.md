IMPORTANT: please make sure you install "git lfs" in order to use this repository.

This is a [Vocs](https://vocs.dev) project bootstrapped with the Vocs CLI.

## Dev

1. Clone the repo and run `pnpm i` to install packages.
2. Run a local environment with `pnpm run dev`.

In order to run the authentication, if needed, you will need to setup a cors-anywhere docker instance in order to proxy the request to the Builder API:

```
docker run -d -p 8080:8080 --dns 1.1.1.1 --name cors-anywhere redocly/cors-anywhere
```

## 

In production, we leverage github actions to deploy a workflow and deploy automatically to github pages via the build branch.

v2 docs of Sequence Stack
