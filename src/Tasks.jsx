import TaskCard from "./TaskCard";
import TaskSideBar from "./TaskSideBar";

export default function Tasks() {
    return (
        <>
        <div className="flex flex-col h-full">
            <div className="w-full">
                <h1 className="text-2xl p-4 pl-6 mb-8">Hello username</h1>
                
            </div>
            <div className="flex flex-row h-full">
                <TaskSideBar/>
                
                <div className="grid grid-cols-3 gap-4 pt-4 pl-4">
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