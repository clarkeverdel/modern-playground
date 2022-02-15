import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps

    return (
      <Html>
        <Head />
        <body className={pageProps.templateName}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
