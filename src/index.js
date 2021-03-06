/* global google */

import React, { Component, PropTypes } from 'react'
import scriptjs from 'scriptjs'

export default (options = {}) => (TargetComponent) => (
  class extends Component {
    static propTypes = {
      key: PropTypes.string,
    }

    state = {
      googleMaps: null,
    }

    componentDidMount() {
      if (typeof window.google === 'undefined') {
        if (typeof window.googleMapsLoaded !== 'undefined') {
          const oldLoaded = window.googleMapsLoaded
          window.googleMapsLoaded = () => {
            oldLoaded()
            this.handleLoaded(google.maps)
          }
        } else {
          window.googleMapsLoaded = () => {
            scriptjs.done('google-maps-places')
          }

          options.callback = 'googleMapsLoaded'

          options.key = options.key || this.props.apiKey

          const queryString = Object.keys(options).reduce((result, key) => (
            options[key] !== null && options[key] !== undefined
              ? (result += key + '=' + options[key] + '&')
              : result
          ), '?').slice(0, -1)

          scriptjs('https://maps.googleapis.com/maps/api/js' + queryString)
          scriptjs.ready('google-maps-places', () => {
            this.handleLoaded(google.maps)
          })
        }
      } else {
        this.handleLoaded(google.maps)
      }
    }

    handleLoaded(googleMaps) {
      this.setState({ googleMaps })
    }

    render() {
      const { googleMaps } = this.state
      return googleMaps
        ? <TargetComponent googleMaps={googleMaps} {...this.props} />
        : null
    }
  }
)
