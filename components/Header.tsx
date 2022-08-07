import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-white border-b-4 border-solid border-sky-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">伊佐市こども支援関連情報提供サイト</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Profile</a>
        </nav>
      </div>
    </header>
      )
}
