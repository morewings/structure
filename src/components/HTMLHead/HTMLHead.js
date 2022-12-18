import Head from 'next/head';
import PropTypes from 'prop-types';

export const HTMLHead = ({children, title}) => {
  return (
    <Head>
      <meta name="description" content="Tree graph view app" />
      <link type="image/png" rel="icon" href="/favicon.png" />
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
