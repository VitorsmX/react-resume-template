import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({children, title, description, ogImageUrl, twitterUrl}) => {
    const {asPath: pathname} = useRouter();

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:image" content="https://i.imgur.com/P5AUw2b.jpeg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content="Home Page" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta content="https://i.imgur.com/P5AUw2b.jpeg" property="og:image:url" />
          <meta content={ogImageUrl} property="og:image:url" />
          <meta content="jpeg" property="og:image:type"></meta>
          <meta content={description} name="description" />

          {/* several domains list the same content, make sure google knows we mean this one. */}
          <link href={`${twitterUrl}${pathname}`} key="canonical" rel="canonical" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={`${twitterUrl}${pathname}`} property="og:url" />

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
