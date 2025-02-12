import { useState } from 'react';
import './App.css';
import LoginModal from './LoginModal';
import Signup from './Signup';
import Login from './Login';

function App() {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <div className='flex items-center justify-center h-screen'>
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-center mb-7">
                        <span className="text-gray-300">Done</span>
                        <span className="text-red-600">zo</span>
                    </h1>
                    <p className="text-lg text-center mb-5">A minimalist task manager app</p>
                    <div className="flex justify-center space-x-14 mt-4">
                        <button
                            className="border-3 border-blue-500 hover:bg-blue-900 text-white py-2 px-4"
                            onClick={() => setIsSignupOpen(true)}
                        >
                            Signup
                        </button>
                        
                        <button
                            className="border-3 border-green-500 hover:bg-green-900 text-white py-2 px-4"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            Login
                        </button>
                    </div>
                    <LoginModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)}>
                        <Signup />
                    </LoginModal>
                    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                        <Login />
                    </LoginModal>
                </div>
            </div>
        </>
    );
}

export default App;