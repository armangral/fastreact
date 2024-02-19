import { NavLink } from "react-router-dom";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlinePlusCircle,
  HiOutlineTrash,
} from "react-icons/hi2";

function Nav() {
  return (
    <nav>
      <ul className="mt-7 rounded-lg flex flex-row shadow-sm p-8 gap-5 bg-white ">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500 bg-gray-200 hover:bg-gray-300 rounded-md p-3 transition duration-300"
            activeClassName="text-brand-600"
          >
            <HiOutlineMagnifyingGlass className="w-6 h-6" />
            <span>Get Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500 bg-gray-200 hover:bg-gray-300 rounded-md p-3 transition duration-300"
            activeClassName="text-brand-600"
          >
            <HiOutlinePlusCircle className="w-6 h-6" />
            <span>Create Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500 bg-gray-200 hover:bg-gray-300 rounded-md p-3 transition duration-300"
            activeClassName="text-brand-600"
          >
            <HiOutlinePencilSquare className="w-6 h-6" />
            <span>Update Post</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-4 text-gray-600 hover:text-blue-500 bg-gray-200 hover:bg-gray-300 rounded-md p-3 transition duration-300"
            activeClassName="text-brand-600"
          >
            <HiOutlineTrash className="w-6 h-6" />
            <span>Delete Post</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
