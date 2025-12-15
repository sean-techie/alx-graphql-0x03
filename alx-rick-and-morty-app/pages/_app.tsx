import type { AppProps } from "next/app"
import "../styles/globals.css"
import ErrorBoundary from "@/components/ErrorBoundary"
import "../sentry.client.config" // Sentry initialization

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp