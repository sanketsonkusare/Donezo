export default function TaskCard() {
    return (
        <div className="inline-block border-3 m-4 w-sm rounded-2xl bg-transparent bg-opacity-50 backdrop-blur-sm">
            <div className="p-4">
                <h3 className="text-2xl font-semibold">Task name</h3>
                <p className="text-lg">Description</p>
                <div className="flex items-center space-x-4 mt-2">
                    <button className="bg-gray-700 text-white rounded w-1/2">Status</button>
                    <button className="bg-gray-700 p-3 text-white rounded w-1/2">date</button>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                    <button className="bg-gray-700 text-white rounded w-1/2">Categories</button>
                    <button className="bg-gray-700 text-white rounded w-1/2">Edit</button>
                </div>
            </div>
        </div>
    );
}