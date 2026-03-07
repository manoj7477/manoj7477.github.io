import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Research from './pages/Research';
import About from './pages/About';
import Awards from './pages/Awards';
import News from './pages/News';
import Gallery from './pages/Gallery';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-shell">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
