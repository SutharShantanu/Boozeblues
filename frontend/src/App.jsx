import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import PageWrapper from "./Routes/PageWrapper";

function App() {
    return (
        <div className="App">
            <Navbar />
            <PageWrapper />
            <Footer />
        </div>
    );
}

export default App;
