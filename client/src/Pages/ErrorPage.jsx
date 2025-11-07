function ErrorPage({ error }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Oops!</h1>
      <p className="text-lg text-gray-700">
        {error?.statusText || error?.message || 'Page not found'}
      </p>
    </div>
  )
}

export default ErrorPage
