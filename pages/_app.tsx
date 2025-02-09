import type { AppProps } from "next/app";
import "/public/css/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200">
        <div className="flex-1 w-full lg:max-w-7xl mx-auto px-4 py-4">
          <div className="logo">
            <img
              src="/image/logo_large.svg"
              className="hidden md:block w-[150px]"
              alt="DO It Logo"
            />
            <img
              src="/image/logo_small.svg"
              className="block md:hidden w-[70px]"
              alt="DO It Logo"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 w-full lg:max-w-7xl mx-auto px-4 py-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
