import TaskCard from "./TaskCard";

export default function Tasks() {
    return (
        <>
        <div className="w-full">
            <h1 className="text-2xl p-4 pl-6">Hello username</h1>
        </div>
        <hr className="w-full border-t-2 border-gray-300 mb-8"/>
        <TaskCard/>
        </>
    );
}