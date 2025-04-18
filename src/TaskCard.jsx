import Dropdown from "./Dropdown";

export default function TaskCard() {
    return (
        <form className="flex flex-col border border-white mb-4 ml-4 w-xs rounded-2xl bg-transparent bg-opacity-50 backdrop-blur-sm p-4">
            <h3 className="text-2xl font-semibold">Task name</h3>
            <p className="text-lg mb-4">Description</p>
            <div className="flex items-center space-x-4 mt-2">
                <Dropdown label="Status" options={["to-do","In progress","Completed"]}/>
                <Dropdown label="Categories" options={["personal","Work","Health"]}/>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <button className="bg-gray-700 text-white rounded w-1/2 p-3">Date</button>
                <button className="bg-gray-700 text-white rounded w-1/2 p-3">Edit</button>
            </div>
            <button className="bg-gray-700 text-white rounded w-full p-3 mt-2">Done</button>
        </form>
    );
}
