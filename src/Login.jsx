export default function Login() {
    return (
        <div>
            <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-center mb-2">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="Username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Username"
                            type="text"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="border-3 bg-blue-200 font-bold text-black border-blue-500 hover:bg-blue-900 hover:text-white py-2 px-4"
                            type="button"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}