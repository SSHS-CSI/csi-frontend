# [sshs.dev](https://sshs.dev) frontend
## Preparing

Make sure you have [`node.js`](https://nodejs.org), [`yarn`](https://yarnpkg.com) and [`parcel`](https://parceljs.org) installed in your path.

``` shellsession
$ node --version
v12.6.0

$ yarn --version
1.17.3

$ parcel --version
1.12.3
```

To install all dependencies, run:

``` shellsession
$ yarn
```

## Developing

To run a dev server, run:

``` shellsession
$ yarn run start
```

The dev server will automatically build your assets and reload your browser automatically.

## Building

To build, first clean up the `dist` directory:

``` shellsession
$ yarn run clean
```

Then build the assets in production mode:

``` shellsession
$ yarn run build
```

The build assets will live in the `dist` directory.

## Hooking up with the [backend](https://github.com/SSHS-CSI/json-api)

To work on requesting API calls, you will have to hook up with the [backend](https://github.com/SSHS-CSI/json-api).
For this, you will have to configure [nginx](https://nginx.org) to reverse-proxy the backend.
