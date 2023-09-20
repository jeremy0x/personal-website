import Head from 'next/head'

interface MetaTagProps {
  title: string
}

export const MetaTag:React.FC<MetaTagProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="V1 of Jeremy's personal website" />

      <meta property="og:image" content="/thumbnail.jpg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="V1 of Jeremy's personal website" />
      <meta property="og:url" content="https://jeremy0x.tech/" />
      <meta property="og:site_name" content="Jeremy" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jeremy0x_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="V1 of Jeremy's personal website" />
      <meta name="twitter:image" content="/thumbnail.jpg" />
    </Head>
  )
}