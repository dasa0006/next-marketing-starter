/* eslint-disable @next/next/no-html-link-for-pages */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-surface-base text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-feedback-error/10">
          <span className="text-3xl font-bold text-feedback-error">404</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Page not found
        </h1>

        <p className="mt-4 max-w-md text-base text-text-secondary">
          The page you are looking for does not exist or has been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-pill bg-brand-primary px-6 py-3 text-sm font-semibold text-text-on-brand transition-colors hover:bg-brand-primary-hover"
        >
          Go back home
        </a>
      </body>
    </html>
  );
}
