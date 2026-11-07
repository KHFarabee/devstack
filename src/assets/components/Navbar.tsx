import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-2">
      <IoMdMenu className="text-2xl lg:hidden" />
      <img
        className="h-7 lg:h-9"
        src="/src/assets/img/logo-text.png"
        alt="Devstack Logo"
      />
      <ul className="hidden md:flex md:gap-10 ">
        <li>
          <a href="#" className="font-medium text-pink-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Technologies
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            About
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <button className="text-xs lg:text-base">Sign In</button>
        <button className="btn btn-xs lg:btn-md btn-secondary rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
