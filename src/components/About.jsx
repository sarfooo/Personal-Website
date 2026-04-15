import { motion } from "framer-motion";
import me from "../assets/me2.jpeg";

function About() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-[90%] pt-16 max-w-5xl md:min-h-screen"
        >
            <div className="mb-10 gap-5 flex items-center md:justify-around">
                <h2 className="whitespace-nowrap text-4xl">About</h2>
                <div className="flex-1 border-t-2 border-gray-300 "></div>
            </div>

            <div className="gap-20 md:flex">
                <div className="text-justify text-sm leading-7 md:max-w-xl md:text-base">
                    <p>
                        I’m a Computer Science student at Kean University focused on security and systems.
                        I’m currently a Software Engineer Intern at Ally Financial, working on banking and trading systems,
                        and previously interned at TechFlow, a government contracting company, where I contributed to software development on secure systems.
                    </p>

                    <p className="mt-5">
                        Outside of work, I spend most of my time playing soccer, snowboarding, and exploring new food spots.
                        I’m also really into music: mostly underground rap, with a mix of EDM, house, and rock.
                    </p>
                </div>

                <img
                    src={me}
                    alt="Michael Sarfo"
                    className="hidden h-auto shrink-0 rounded-2xl shadow-lg md:block md:w-96"
                />
            </div>
        </motion.section>
    );
}

export default About;