import Link from 'next/link';

export default function Custom404() {
    return (
      <>
        <div className="bg-slate-200 grid">
          <main className="flex-cols text-center">
            <h1 className="mx-auto text-4xl">Error: 404</h1>
            
            <p className="mx-auto mt-20 text-lg">該当するページがありません。</p>
            <p className="mx-auto text-lg">Sorry, the requested page was not found.</p>
            <p className="mx-auto mt-10 text-xs text-slate-400 tracking-wider">HTTP GET REQUEST FAILED WITH STATUS 404 (NOT FOUND).</p>
          </main>
          <div className="mt-40 ml-8">
            <p>上部に表示されているナビゲーションバーから対応するページに飛んでいただくか、下のリンクからご希望のページへ飛んでください。</p>
            <ul className="list-disc list-inside mt-4">
            <li>
                <Link href="/">
                  <a className="underline hover:text-gray-500">トップページ</a>
                </Link>
              </li>
              <li className="mt-4">
                <Link href="https://www.city.isa.kagoshima.jp/" passHref>
                  <a className="underline hover:text-gray-500">伊佐市公式ウェブサイト (外部リンク)</a>                
                </Link>
              </li>
              <li>
                <Link href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kodomo/kodomo_kosodate/index.html" passHref>
                  <a className="underline hover:text-gray-500">厚生労働省 子ども・子育て支援関連ページ (外部リンク)</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}