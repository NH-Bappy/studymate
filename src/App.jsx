import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar , Welcome, Dock, Finder, Home } from "#components";
import {
  Contact,
  ImageWindow,
  Photos,
  Resume,
  Safari,
  Terminal,
  TextWindow,
} from "#windows";
import CalculatorWindow from "#windows/Calculator";




gsap.registerPlugin(Draggable)

const App = () => {




  return (
      <main>
        <Navbar/>
        <Welcome/>
        <Dock/>
        <Terminal/>
        <Safari/>
        <Resume/>
        <Finder/>
        <Contact/>
        <Photos/>
        <CalculatorWindow/>
        <TextWindow/>
        <ImageWindow/>

        <Home/>
      </main>
  )
}

export default App