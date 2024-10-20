import { FaSearch } from "react-icons/fa";

export function SearchField() {
  return (
    <div className="hidden md:flex bg-[#FAFAFA] text-app-grey-400 py-1 px-2 gap-2 items-center rounded-sm">
      <FaSearch />
      <input type="" placeholder="Search" className="outline-none"/>
    </div>
  )
}