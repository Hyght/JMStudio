/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ForWork from "./components/ForWork";
import TakeOnWork from "./components/TakeOnWork";
import Contact from "./components/Contact";
function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="landing">
                <Landing />
            </div>

            <div className="app-contents">
                <ForWork />

                <TakeOnWork />
                <Contact />
            </div>
        </div>
    );
}

export default App;
