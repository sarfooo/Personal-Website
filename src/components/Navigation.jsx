function Navigation({aboutRef, experienceRef, contactRef}) {
    return (
        <nav className="flex ml-auto mr-auto mt-2 text-lg max-w-360">
            <div className="hidden md:flex gap-6">
                <a className="border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200">Michael Sarfo</a>
                <a href="#" className="border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200 cursor-pointer">
                    Home
                </a>
                <a 
                    onClick={() => { aboutRef.current?.scrollIntoView({ behavior: "smooth" }) }} 
                    className="border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200 cursor-pointer"
                >
                        About
                </a>

                <a 
                    onClick={() => { experienceRef.current?.scrollIntoView({ behavior: "smooth" }) }} 
                    className="border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200 cursor-pointer"
                >
                        Experience
                </a>
                <a 
                    onClick={() => { contactRef.current?.scrollIntoView({ behavior: "smooth" }) }}
                    className="border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200 cursor-pointer"
                >
                    Contact
                </a>
            </div>

            <div className="flex ml-auto gap-3 items-center ">
                <a href="mailto:michaeljsarfo@gmail.com" aria-label="Send email" className="hover:text-gray-500 transition-colors duration-200">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z" />
                    </svg>
                </a>

                <a target="_blank" href="https://github.com/sarfooo" className="hover:text-gray-500 transition-colors duration-200">
                    <svg viewBox="0 0 24 24" width="30" height="25" fill="currentColor">
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                    </svg>
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/michaelsarfox/" aria-label="LinkedIn profile" className="hover:text-gray-500 transition-colors duration-200">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                </a>
            </div>
        </nav>
    )
}

export default Navigation