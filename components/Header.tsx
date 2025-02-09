import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="flex-1 w-full lg:max-w-7xl mx-auto px-4 py-4">
        <div>
          <Link href="/" className="logo">
            <img
              src="/image/logo_large.svg"
              alt="Do It Logo"
              className="hidden md:block w-[150px] cursor-pointer"
            />
            <img
              src="/image/logo_small.svg"
              alt="Do It Logo"
              className="block md:hidden w-[70px] cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
