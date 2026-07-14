const Navbar = () => {
  return (
    <nav className="w-full bg-white/60 backdrop-blur-lg shadow-md px-6 py-4 flex justify-between items-center rounded-2xl mb-8">
      <h1 className="text-2xl font-bold text-indigo-700">
        📖 Dictionary App
      </h1>

      <span className="text-sm text-gray-600">
        React + Dictionary API
      </span>
    </nav>
  );
};

export default Navbar;