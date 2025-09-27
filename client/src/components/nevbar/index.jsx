export default function Nevbar(){
    return (
        <nav className="w-full h-20 flex justify-between items-center bg-black">
            <div className='pl-8 text-2xl font-extrabold text-white'>Portfolio</div>
            <div className='flex items-center justify-center'>
                <a
                    href="#home"
                    className="p-4 text-2xl text-white transform transition duration-200 hover:scale-110 hover:text-gray-300"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="p-4 text-2xl text-white transform transition duration-200 hover:scale-110 hover:text-gray-300"
                >
                    About
                </a>
                <a
                    href="#work"
                    className="p-4 text-2xl text-white transform transition duration-200 hover:scale-110 hover:text-gray-300"
                >
                    Work
                </a>
            </div>
            <a
                href="#contact"
                className="mr-2 pr-6 text-2xl text-white transform transition duration-200 hover:scale-110 hover:text-gray-300"
            >
                Contact
            </a>
        </nav>
    )
}