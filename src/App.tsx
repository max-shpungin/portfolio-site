import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./modules/ScrollToTop/ScrollToTop";

import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

import Home from "./pages/Home/Home";
import CaseStudyEnvoy from "./pages/CaseStudyEnvoy/CaseStudyEnvoy";
import TestPage from "./pages/Dev/TestPage/TestPage";
import NotFound from "./pages/NotFound/NotFound";


import "./app.css";

function App() {
    return (
        <div className="App container-fluid bg-light-subtle text-dark m-0 p-0">
            <BrowserRouter>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/case-study-envoy"
                        element={<CaseStudyEnvoy />}
                    />
                    <Route path="test" element={<TestPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;