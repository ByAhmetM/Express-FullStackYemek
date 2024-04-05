import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline, IoCreateOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart, CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center p-3 max-md:p-2 max-md:justify-normal max-md:gap-20 lg:p-10">
      <Link to={"/"}>
        <img
          className="w-[150px] max-md:w-[90px]"
          src="/recipe_logo.png"
          alt="recipe_logo"
        />
      </Link>

      {/* menü kısmı */}
      <div className="flex flex-col gap-10">
        <NavLink
          to={"/"}
          className="flex gap-4 items-center text-lg text-gray-400 px-4 py-3  rounded-lg hover:bg-gray-300"
        >
          <IoHomeOutline className="max-md:text-2xl" />
          <span className="max-md:hidden">Anasayfa</span>
        </NavLink>

        <NavLink
          to={"/ekle"}
          className="flex gap-4 items-center text-lg text-gray-400 px-4 py-3  rounded-lg hover:bg-gray-300"
        >
          <IoCreateOutline className="max-md:text-2xl" />
          <span className="max-md:hidden">Tarif Ekle</span>
        </NavLink>

        <NavLink
          to={"/kesfet"}
          className="flex gap-4 items-center text-lg text-gray-400 px-4 py-3  rounded-lg hover:bg-gray-300 hover:text-gray-700"
        >
          <FaRegCompass className="max-md:text-2xl" />
          <span className="max-md:hidden">Keşfet</span>
        </NavLink>
        <NavLink
          to={"/likes"}
          className="flex gap-4 items-center text-lg text-gray-400 px-4 py-3  rounded-lg hover:bg-gray-300 hover:text-gray-700"
        >
          <CiHeart className="max-md:text-2xl" />
          <span className="max-md:hidden">Favoriler</span>
        </NavLink>

        <NavLink
          to={"/help"}
          className="flex gap-4 items-center text-lg text-gray-400 px-4 py-3  rounded-lg hover:bg-gray-300 hover:text-gray-700"
        >
          <CiSettings className="max-md:text-2xl" />
          <span className="max-md:hidden">Yardım</span>
        </NavLink>
      </div>

      <div className="flex flex-col gap-2 max-md:hidden">
        <p className="font-semibold">Günlük Haberleri Al</p>
        <button className=" bg-red-500 hover:bg-red-400 p-2 rounded-lg text-white">
          Abone Ol
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
