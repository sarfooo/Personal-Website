import { motion } from "framer-motion";

function TechStack({ technologies }) {
    return (
        <div className="mt-5 ml-3 flex flex-wrap gap-5">
            {technologies.map((technology) => {
                return (
                    <span key={technology} className="rounded bg-gray-100 px-3">
                        {technology}
                    </span>
                );
            })}
        </div>
    );
}

function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-[90%] pt-16 max-w-5xl md:min-h-[90vh]"
        >
            <div className="mb-10 flex items-center gap-5">
                <h2 className="whitespace-nowrap text-4xl">Experience</h2>
                <div className="flex-1 border-t-2 border-gray-300 "></div>
            </div>

            <div className="space-y-12 border-l border-gray-300 pl-6">
                <article>
                    <h3 className="text-xl font-semibold text-purple-500">Ally</h3>

                    <div className="text-gray-700 md:flex md:justify-between">
                        <p className="text-md font-medium">Software Engineer Intern</p>
                        <span className="text-md">June 2026 - August 2026</span>
                    </div>

                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600 md:text-base">
                        <li>Incoming Summer 2026</li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-xl font-semibold text-pink-400">TechFlow</h3>

                    <div className="text-gray-700 md:flex md:justify-between">
                        <p className="text-md font-medium">Software Engineer Intern</p>
                        <span className="text-md">June 2025 - August 2025</span>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-justify text-sm text-gray-600 md:text-base">
                        <li>
                            Built an automated contract ingestion pipeline using Python, AWS S3, and MariaDB that processed SAM.gov data, reducing update cycles from hours to minutes and enabling near real-time analytics
                        </li>
                        <li>
                            Developed an LLM-powered contract matching system using AWS Bedrock that evaluated 1000+ federal opportunities, cutting review time from hours to seconds and eliminating a months-long analyst backlog
                        </li>
                    </ul>

                    <TechStack technologies={["Python", "AWS", "MariaDB", "Redis"]} />
                </article>
            </div>
        </motion.section>
    );
}

export default Experience;