import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";

function Introduction({ aboutRef }) {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <motion.img
                src={me}
                alt="Michael Sarfo"
                className="m-5 w-50 shrink-0 rounded-4xl shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />

            <ReactTyped
                strings={["hi, i'm michael"]}
                typeSpeed={60}
                className="mt-5 text-4xl"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 w-[75%] text-center"
            >
                I’m a Computer Science student at Kean University focused on security engineering.
            </motion.p>

            <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 cursor-pointer rounded-xl border border-black/10 px-6 py-3 shadow-lg"
                onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                read about me!
            </motion.button>
        </section>
    );
}

export default Introduction;