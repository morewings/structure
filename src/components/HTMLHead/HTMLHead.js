import Head from 'next/head';
import PropTypes from 'prop-types';

export const HTMLHead = ({children, title}) => {
  return (
    <Head>
      <meta name="description" content="Tree graph view app" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{`Structure | ${title}`}</title>
      {children}
    </Head>
  );
};

HTMLHead.propTypes = {
  title: PropTypes.string,
};

HTMLHead.defaultProps = {
  title: '',
};
