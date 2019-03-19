import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../state/store'
import '../antd_custom/styles.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {}
  }

  render() {
    const { Component, store } = this.props
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    )
  }
}

export default withRedux(initStore)(MyApp);
