import {TiArrowSortedDown} from 'react-icons/ti'
import { useState } from 'react';

const SearchDropdown = (fetchName) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedId, setSelectedId] = useState("");
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="p-2 w-full sm:w-36 px-5 h-[54px] gap-2 cursor-pointer flex items-center justify-between  
            rounded border hover:bg-purple-400 text-[12px] hover:text-white transition-all hover:border-purple-400"
      >
        {selected ? selected : "Todo"}
        <TiArrowSortedDown className={`${open && "rotate-180"}`} />
      </div>
      <form className="relative">
        <input type="hidden" value={selectedId ? selectedId : null} />
        <ul
          className={`bg-white absolute z-10 border-x border-b rounded-b transition-all w-full ${
            open ? "block" : "hidden"
          }`}
        >
          {items.map((item, index) => (
            <li
              id={item.name}
              key={index}
              className="p-3 hover:bg-purple-400 transition-all duration-250 
                  cursor-pointer hover:text-white hover:rounded-b-[3px] px-5 text-[12px] 
                  hover:border-violet-300"
              onClick={() => {
                if (
                  item?.name.toLowerCase() !== selected.toLowerCase()
                ) {
                  setSelected(item?.name);
                  setSelectedId(item?.id);
                  setOpen(!open);
                }
              }}
            >
              {item?.name}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchDropdown;
