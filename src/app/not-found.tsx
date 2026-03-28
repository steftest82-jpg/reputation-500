import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-gray-800">
        The page you are looking for does not exist or has been moved. Let us
        get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
