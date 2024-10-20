import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="mb-10 flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          <div className="container">
            <div className="copy-container center-xy">
              <p>404, page not found.</p>
              <span className="handle"></span>
            </div>
          </div>
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on homepage.</p>
        <Link
          href="/"
          className=" focus:shadow-outline-blue mx-auto inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
