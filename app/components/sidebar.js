'use client';
import { useState } from "react";
import { BiMenu, BiBookmarkHeart } from "react-icons/bi";
const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div className={` ${open ? "w-1/2" : "w-0"} bg-dark-purple h-screen p-5 relative duration-300`} >
        <BiMenu
          className={`absolute cursor-pointer -right-3 top-7 text-3xl  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <BiBookmarkHeart
            className={`text-3xl cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>

      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default App;