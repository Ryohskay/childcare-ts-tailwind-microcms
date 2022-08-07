import { client } from '../libs/client';
import Link from 'next/link';
import type { Article } from '../types/article';

type Props = {
  article: Array<Article>;
};

export default function Home({ article }: Props) {
  return (
    <>
      <div className="grid place-items-center w-full">
        <div className="relative">
          <img src="/images/photo-ac_com/classroom_miniature_large.jpg" alt="Classroom Miniature"/>
          <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <div className="flex">
              <h1 className="text-8xl">For <i className="text-green-500 text-bold">Our</i> Children.</h1>
            </div>
            <div className="flex">
              <p className="text-3xl">子供のために。</p>
            </div>
            <div className="text-2xl sm:bg-white sm:bg-opacity-60 sm:text-black">
              <div className="flex mt-10 sm:mt-20">
                <p className="sm:text-4xl">国や県、伊佐市はいろいろな特性や特徴をもった子供がそれぞれの未来を描けるよう、子どもやその保護者に向けてさまざまな支援やサービスを用意しています。</p>
              </div>
              <div className="flex mt-5">
                <p className="sm:text-4xl">それら生活面・学習面などで支援を知って適切に活用できるようにしましょう。</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
 
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl-gtid-cols-3">
        年代別
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full aspect-video object-cover" src="/images/photo-ac_com/kindargarten_children_in_uniform.jpg" alt="kindargarten children in uniform" />
          <div className="px-5 py-2 sm:py-3">
            <p>未就学児</p>
          </div>
          <div className="px-5 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              幼稚園
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              保育園
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              認定こども園
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full aspect-video object-cover" src="/images/burst/teacher-flatlay.webp" alt="teacher's desk" />
          <div className="px-5 py-2 sm:py-3">
            <p>進学</p>
          </div>
          <div className="px-5 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              小・中・高
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              大学など
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full aspect-video object-cover" src="/images/burst/typed-text-says-work.jpg" alt="Photo of typed text that says work" />
          <div className="px-5 py-2 sm:py-3">
            <p>仕事</p>
          </div>
          <div className="px-5 pt-4 pb-2 bg-gray-200">
            <span className="text-sm">障害者福祉制度を利用したものだけでなくさまざまな形での就職、就業などを案内します。</span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full aspect-video object-cover" src="/images/burst/parent_baby_holding_hands.jpg" alt="a parent and a baby holding hands" />
          <div className="px-5 py-2 sm:py-3">
            <p>保護者</p>
          </div>
          <div className="px-5 pt-4 pb-2 bg-gray-200">
            <span className="text-sm">障害などをもったお子さんの保護者の方に知って頂きたい情報を案内します。</span>
          </div>
        </div>
      </div>

      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
       記事一覧
     </h1>
     <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

       {article.map(article => (

         <div className="rounded overflow-hidden shadow-lg" key={article.id}>
           <img
             className="w-full"
             src={article.eye_catch.url}
             alt="Article's eye-catch image"
           />

           <div className="px-6 py-4">
             <Link href={`/articles/${article.id}`} passHref>
               <a>{article.title}</a>
             </Link>
           </div>

           <div className="px-6 pt-4 pb-2">
           {article.tag && (
             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
               #{article.tag}
             </span>
           )}
           </div>
         </div>

       ))}

     </div>
    </>
      )
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      article: data.contents,
    },
  };
};
