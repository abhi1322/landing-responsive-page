const Header = () => {
  return (
    <div className="pt-4 sm:pt-0">
      <nav className="flex justify-between items-center">
        <div className="logo-container flex gap-4">
          <img src="/public/assets/Logo.svg" alt="hosterr-logo" />
          <p className="bg-gradient-to-r from-orange-400 to-red-500 px-4 py-2 font-bold text-white text-xs rounded-full">
            Hoster is hiring!
          </p>
        </div>
        <ul className="hidden md:flex gap-10 items-center text-neutral-500">
          {["Plans", "Find Domains", "Why Hoster"].map((item, index) => (
            <li key={index} className="hover:text-orange-500">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="authentication hidden md:flex gap-4 items-center">
          <a href="#" className="hover:text-orange-500">
            Sign in
          </a>
          <button className="bg-blue-500 text-white py-4 px-5 rounded-md hover:bg-blue-400">
            Join Waitlist
          </button>
        </div>

        <div className="md:hidden cursor-pointer">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/menu--v1.png"
            alt="menu--v1"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
