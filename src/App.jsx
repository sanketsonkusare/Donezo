import './App.css';
import Landing from './Landing';
import Tasks from './Tasks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
           <Router>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/Tasks" element={<Tasks/>} />
                </Routes>
           </Router>
        </>
    );
}

export default App;