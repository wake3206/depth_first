import React from 'react'
import App from 'next/app'
import '../antd_custom/styles.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {}
  }

  render() {
    const { Component } = this.props
    return <Component  />
  }
}

export default MyApp
