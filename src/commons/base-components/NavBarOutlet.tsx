import { Outlet } from "react-router-dom";
import { clsxMerge } from "@/shared/utils/clsxMerge";
import ClaroLogo from "@/assets/claro.png";

function NavOutletLayout() {

  return (
    <>
      <nav className={clsxMerge(
        "w-full top-0 z-20 border-b-uns-gray-200 py-1 px-5",
        "bg-white/30 backdrop-blur-sm fixed"
      )
      }>
        <ul className="flex items-center px-4 sm:px-12 h-full">
          <li>
            <img src={ClaroLogo} className="object-contain size-20" alt="claro-logo" />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavOutletLayout;