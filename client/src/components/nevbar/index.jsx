export default function Nevbar(){
    return (
      <nav className="w-full z-50 fixed h-24 flex text-3xl justify-between font-semibold text-white items-center bg-stone-800/60">
        <div className=" ml-4 w-48 text-black flex justify-center items-center rounded-xl text-3xl p-4 bg-yellow-400 font-extrabold ">
          Narender
        </div>
        <div className="flex items-center gap-8 justify-center">
          <a
            href="#home"
            className="transform transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="transform transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#work"
            className="transform transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Work
          </a>
        </div>
        <div className="w-48 mr-4 flex justify-end">
          <a
            href="#contact"
            className="mr-2 pr-6 transform transition duration-200 hover:scale-110 hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </nav>
    );
}