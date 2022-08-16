import { client } from '../libs/client';
import type { Article } from '../types/article';
import Link from 'next/link';

type Props = {
  article: Array<Article>;
};

export default function Home({ article }: Props) {
  return (
    <>
      <div className="grid place-items-center w-full">
        <div className="relative">
          <picture>
            <source src="/images/photo-ac_com/classroom_miniature_large.jpg" type='image/jpeg' />
            <img src="/images/photo-ac_com/classroom_miniature_large.jpg" alt="Classroom Miniature" />
          </picture>
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
        <div className="rounded overflow-hidden dark:border dark:border-solid dark:border-stone-100 shadow-lg  hover:text-slate-500 hover:border-2 hover:border-solid hover:border-slate-300">
          <Link href="/preschool_care" passHref>
            <a>
              <picture>
                <source src="/images/photo-ac_com/kindargarten_children_in_uniform.jpg" type='image/jpeg' />
                <img className="w-full aspect-video object-cover" src="/images/photo-ac_com/kindargarten_children_in_uniform.jpg" alt="kindargarten children in uniform" />
              </picture>
            </a>
          </Link>
          <Link href="/preschool_care" passHref>
            <a>
              <p className="px-5 py-2 sm:py-3">
                未就学児
              </p>
            </a>
          </Link>
          <div className="px-5 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              幼稚園・保育園・認定こども園など
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              療育施設など
            </span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg dark:border dark:border-solid dark:border-stone-100 hover:text-slate-500 hover:border-2 hover:border-solid hover:border-slate-300">
          <Link href="/students" passHref>
            <a>
              <picture>
                <source src="/images/burst/teacher-flatlay.webp" type='image/webp' />
                <img className="w-full aspect-video object-cover" src="/images/burst/teacher-flatlay.webp" alt="teacher's desk" />
              </picture>
            </a>
          </Link>
          <Link href="/students">
            <a>
              <p className="px-5 py-2 sm:py-3">進学</p>
            </a>
          </Link>
          <div className="px-5 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              小・中学校など
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              高校・大学など
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              特別支援学級・養護学校など
            </span>              
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg dark:border dark:border-solid dark:border-stone-100 hover:text-slate-500 hover:border-2 hover:border-solid hover:border-slate-300">
          <picture>
            <source src="/images/burst/typed-text-says-work.jpg" type='image/jpeg' />
            <img className="w-full aspect-video object-cover" src="/images/burst/typed-text-says-work.jpg" alt="Photo of typed text that says work" />
          </picture>
          <div className="px-5 py-2 sm:py-3">
            <p>仕事</p>
          </div>
          <div className="px-5 pt-4 pb-2 bg-gray-200 dark:bg-slate-600 dark:hover:text-slate-200">
            <span className="text-sm">さまざまな就労支援の制度等や障害者福祉制度を利用したものを含めさまざまな形での就職、就業などを案内します。</span>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg dark:border dark:border-solid dark:border-stone-100 hover:text-slate-500 hover:border-2 hover:border-solid hover:border-slate-300">
          <picture>
            <source src="/images/burst/parent_baby_holding_hands.jpg" type='image/jpeg'/>
            <img className="w-full aspect-video object-cover" src="/images/burst/parent_baby_holding_hands.jpg" alt="a parent and a baby holding hands" />
          </picture>
          <div className="px-5 py-2 sm:py-3">
            <p>保護者</p>
          </div>
          <div className="px-5 pt-4 pb-2 bg-gray-200 dark:bg-slate-600 dark:hover:text-slate-200">
            <span className="text-sm">小さなお子さんの居る家庭の方や障害などをもったお子さんの保護者の方に知って頂きたい情報を案内します。</span>
          </div>
        </div>
      </div>

      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
       記事一覧
     </h1>
     <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

       {article.map(article => (

        <div className="rounded overflow-hidden shadow-lg dark:border dark:border-solid dark:border-stone-100 hover:text-slate-400" key={article.id}>
          {article.eye_catch && (<Link href={`/articles/${article.id}`} passHref>
            <img 
              className="w-full aspect-video object-cover" 
              src={article.eye_catch.url} 
              alt="kindargarten children in uniform"
            />
          </Link>)}

          <Link href={`/articles/${article.id}`} passHref>
            <div className="px-6 py-4">
              <a className="font-bold">{article.title}</a>
            </div>
          </Link>
          <div className="px-6 pt-4 pb-2">
          {article.tag.map(function(tagItem, index){
              return (
                <span className="ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={index}>
                  #{tagItem.name}
                </span>
              )}
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
