import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
    <div className="relative">
        <input type="text" placeholder="Search..." className="bg-[#F4F4F5] py-2 px-4 focus:outline-none rounded-full"/>
        <button className="absolute right-3 top-2.5 hover:text-secondery"><FaSearch/></button>
    </div>
  )
}

export default Search;