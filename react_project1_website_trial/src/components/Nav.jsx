import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="w-full bg-[#1D1D1D] padding-x py-8 z-10">
      <nav className="flex flex-row justify-around justify-items-stretch max-container">
        <a href="example.com">
          <img src="./public/go.jpg" className="h-14 w-14 ml-10" />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-extralight">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-poppins font-medium text-xl text-[#f31212e6]">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
