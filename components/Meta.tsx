import Head from 'next/head'

interface MetaProps {
    title?: string,
    keywords?: string,
    description?: string
}

const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Chaitanya Giri",
    keywords: "chaitanya giri, chaitanyagiri, chaitanya, chaitanyag, chaitanya giri portfolio",
    description: "Chaitanya Giri Portfolio - Full Stack Developer"
}

export default Meta