import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-gray-900 text-white px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        AppBuilder AI
      </Link>
      <div className="space-x-4">
        <Link href="/templates">Templates</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
