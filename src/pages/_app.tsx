import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store';
import globalStyle from '../styles/global';
import normalizeStyle from '../styles/normalize';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <title>pomogu</title>
        </Head>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>

        <style global jsx>{`
          ${globalStyle}
          ${normalizeStyle}
          body {
            font-family: 'Open Sans', sans-serif;
          }
        `}</style>
      </>
    );
  }
}
