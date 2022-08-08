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
        <div>
            <ol>
                <li>Hey</li>
                {article.map((article) => (
                    <li key={article.id}>
                        <Link href={`/articles/${article.id}`} passHref>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}    
            </ol>
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
    const id = '9zhtgcppg' // category id of "更新情報"

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