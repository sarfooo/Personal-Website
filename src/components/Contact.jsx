function Contact() {
    return (
        <footer className="mx-auto w-[90%] pt-15 max-w-5xl min-h-[90vh] justify-between">
            <div className="mx-auto text-center">
                <div className="flex flex-col items-center gap-5">
                    <div className="w-full border-t border-gray-300"></div>
                    <h2 className="text-4xl">Connect With Me!</h2>

                    <p>
                        I'm always interested in hearing about new opportunities, collaborations, and innovative projects. Feel free to reach out.
                    </p>

                    <div className="flex w-full flex-col justify-center gap-10 md:flex-row md:flex-wrap">
                        <a
                            href="mailto:michaeljsarfo@gmail.com"
                            className="rounded-2xl border border-black px-10 py-4 transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            Email
                        </a>

                        <a
                            href="https://linkedin.com/in/michaelsarfox"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-black px-8 py-4 transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            Linkedin
                        </a>

                        <a
                            href="https://github.com/sarfooo"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-black px-9 py-4 text-center transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;