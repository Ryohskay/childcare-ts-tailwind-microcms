import { GetStaticProps } from 'next';
import { client } from '../libs/client';
import Link from 'next/link';
import type { Article } from '../types/article';

type Props = {
  article: Array<Article>;
};

export default function PreschoolCare({ article }: Props) {
  return (
    <>
        <div className="container mx-auto grid grid-cols-1 mt-8">
            <h1 className="text-3xl">未就学児</h1>
            <p className="text-base mt-2">未就学の子どもや幼稚園、認定こども園、保育園、保育所などに通っている児童とその保護者の方に知って頂きたい情報をまとめました。</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4">
            <ul className="list-inside">
                {article.map((article) => (
                    <li key={article.id} className="mt-4 border-2 border-solid border-slate-500 drop-shadow-md">
                        <img
                            className="object-cover aspect-video"
                            src={article.eye_catch.url}
                        />
                        <Link href={`/articles/${article.id}`} passHref>
                            <a>{article.title}</a>
                        </Link>

                        <div className="px-6 pt-4 pb-2">
                            {article.tag && (
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{article.tag}
                                </span>
                            )}
                        </div>
                    </li>
                ))}    
            </ul>
        </div>
    </>
)};

// export const getStaticPaths = async () => {
//     const data = await client.get({
//         endpoint: "categories",
//     });
//     const paths = data.contents.map((content) => `/articles/${content.id}`);
  
//     return { paths, fallback: false };
//   };
  
export const getStaticProps: GetStaticProps = async () => {
    const id = 'c1lnybipzi' // category id of "未就学児"

    const data = await client.get({
      endpoint: 'articles', 
      queries: { filters: `category[equals]${id}` },
    });
  
    return {
        props: {
            article: data.contents,
        },
    };
};