import React, { useReducer } from 'react'
import App from 'next/app'
import { MainProvider } from "../state/contexts";
import '../antd_custom/styles.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {}
  }

  render() {
    const { Component } = this.props
    return (
      <MainProvider>
        <Component />
      </MainProvider>
    )
  }
}

export default MyApp
