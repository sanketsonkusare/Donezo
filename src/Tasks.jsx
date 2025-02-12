import TaskCard from "./TaskCard";
import TaskSideBar from "./TaskSideBar";

export default function Tasks() {
    return (
        <>
        <div className="flex flex-col h-full">
            <div className="flex flex-row w-full">
                <h1 className="text-2xl p-4 pl-6 mb-8">Hello username</h1> 
                <button className="text-2xl p-4 pl-6 ml-8 mt-3 bg-gray-700 text-white rounded-2xl h-1/2">+ Add Task</button>
            </div>
            <div className="flex flex-row h-full">
                <TaskSideBar/>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                </div>
            </div>
        </div>
        </>
    );
}