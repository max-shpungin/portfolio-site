import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

import "./app.css";

function App() {
    return (
        <div className="App container-fluid bg-light-subtle text-dark m-0 p-0">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
