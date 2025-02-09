import type { AppProps } from "next/app";
import "/public/css/global.css";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="flex-1 w-full lg:max-w-7xl mx-auto px-4 py-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
