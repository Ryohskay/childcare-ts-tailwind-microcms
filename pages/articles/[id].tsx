import { GetStaticProps } from 'next';
import type { Article } from '../../types/article';
import { client } from '../../libs/client';

type Props = {
  article: Article;
};

export default function Article({ article }: Props) { // getStaticProps の props に入っている値が自動的に渡される？
  return (
    <>
    <div className="bg-gray-50">
      <div className="px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          {article.eye_catch && (<img
            className="object-cover w-full shadow-sm h-full"
            src={article.eye_catch.url}
          />)}
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {article.title}
            </div>
          </div>
          <div className="flex items-center justify-start mt-4 mb-4">
            {article.tag.map(function(tagItem, index){
              return (
                  <div className="ml-2 px-2 py-1 font-bold bg-red-400 text-white rounded-lg" key={index}>
                    #{tagItem.name}
                  </div>
              
              )}
            )}
          </div>
          <div className="mt-2">
            <div className="text-2xl mt-4 rounded dark:text-slate-900" dangerouslySetInnerHTML={{__html: article.body} } />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: "articles",
      });
  const paths = data.contents.map((content) => `/articles/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};
