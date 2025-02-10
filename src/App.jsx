import { useState } from 'react';
import './App.css';
import Modal from './Modal';
import Signup from './Signup';

function App() {
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-3.5">
                <span className="text-gray-300">Done</span>
                <span className="text-red-600">zo</span>
            </h1>
            <p className="text-lg text-center mb-3">A minimalist task manager app</p>
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    className="border-3 border-blue-500 hover:bg-blue-900 text-white py-2 px-4"
                    onClick={() => setIsSignupOpen(true)}
                >
                    Signup
                </button>
                <button className="border-3 border-green-500 hover:bg-green-900 text-white py-2 px-4">
                    Login
                </button>
            </div>
            <Modal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}>
                <Signup />
            </Modal>
        </>
    );
}

export default App;