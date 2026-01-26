import { Navbar, Welcome, Dock, Home } from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image, Contact } from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />
        <Home />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
        <Contact/>
    </main>
  );
};

export default App;
