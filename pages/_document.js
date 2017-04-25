import Document, {Main, Head, NextScript} from 'next/document';
import {loadGetInitialProps} from 'next/dist/lib/utils';
import {renderStatic} from 'glamor/server';

export default class Doc extends Document {
  static async getInitialProps(ctx) {
    const styles = renderStatic(() => '');

    return {
      ...await loadGetInitialProps(Document, ctx),
      ...styles
    };
  }

  constructor(props) {
    super(props);
    const {ids, __NEXT_DATA__} = props;

    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html>
        <Head></Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}