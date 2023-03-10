import Head from "next/head";

interface Props {
    description: string,
    title: string,
}

export default function CustomHead(props: Props) {
    const { title, description } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={`${description}`} />
        </Head>
    )
}