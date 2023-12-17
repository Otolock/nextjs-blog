import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    const pageTitle = postData.title;
    const pageDescription = postData.excerpt;

    return (
        <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="bg-white">
                <div className="text-base leading-7 text-gray-700">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{postData.title}</h1>
                    <div className={`text-gray-500 mt-2`}>
                        <Date dateString={postData.date} />
                    </div>
                    <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            </article>
        </Layout>
    );
}