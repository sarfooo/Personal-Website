import {useRef } from "react"

import Introduction from './components/Introduction.jsx';
import About from  "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Navigation from './components/Navigation.jsx';
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const contactRef = useRef(null);
	return (
		<div className="font-sans font-extralight">

			<Navigation aboutRef={aboutRef} experienceRef={experienceRef} contactRef={contactRef} />
			<Introduction aboutRef={aboutRef} />
			<div ref={aboutRef}><About /></div>
			<div ref={experienceRef}><Experience /></div>
			<div ref={contactRef}><Contact /></div>
			<Footer />

		</div>
	)
}

export default App;