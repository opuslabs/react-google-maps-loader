# react-google-maps-loader ![npm](https://img.shields.io/npm/v/react-google-maps-loader.svg) ![license](https://img.shields.io/npm/l/react-google-maps-loader.svg) ![github-issues](https://img.shields.io/github/issues/cedricdelpoux/react-google-maps-loader.svg)

React decorator to use google maps services into your react applications

## Install

```sh
npm install --save react-google-maps-loader
```

## Changelog

See [changelog](./CHANGELOG.md)

## Usage

The `googleMapsLoader` decorator take an options object in parameter.
You can specify any parameters Google let you use to load Google Maps API.
Checkout [Google Maps Javascript API documentation](https://developers.google.com/maps/documentation/javascript/libraries) to specify librairies or others parameters.

**Note:** If the Google API key isn't specified in the decorator options, the loader will
use the 'apiKey' prop set on the Component.

```js
import React, { Component } from 'react'
import googleMapsLoader from 'react-google-maps-loader'

CONST = GOOGLE_MAPS_API_KEY = 'myapikey' // Change your api key

@googleMapsLoader({ key: GOOGLE_MAPS_API_KEY, libraries: ['places','geometry'] })
export default class MyComponent extends Component {
  state = {
    map: null,
  }

  componentDidMount() {
    const { googleMaps } = this.props
    const map = new googleMaps.Map(React.findDOMNode(this.refs.map))

    this.setState({ map })
  }

  method() {
    const { googleMaps } = this.props

    return (
      <div ref="map"></div>
    )
  }
}
```

## Development

### Clean `lib` folder

```js
npm run clean
```

### Build `lib` folder

```js
npm run build
```

### Watch `src` folder

```js
npm run watch
```

### Lint `src` folder

```js
npm run lint
```

## License

See [MIT](./LICENCE)
