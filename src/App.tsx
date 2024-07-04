import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from "./pagesOutlet/Home";
import About from "./pagesOutlet/About";
import Contact from "./pagesOutlet/Contact";
import Layout from "./pagesOutlet/Layout";
import ContactDetail from "./pagesOutlet/ContactDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About name="bro"/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:username" element={<ContactDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
