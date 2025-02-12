import SideTasks from "./SideTasks";
export default function TaskSideBar() {

    return (
        <>
            <div className="flex">
                <div>
                    <p className="ml-4 w-42 mb-4">Completed tasks</p>
                    <SideTasks/>
                    <SideTasks/>
                    <SideTasks/>
                </div>
                <div className="flex-grow">
                    <div className="h-full w-px bg-gray-300 ml-6"></div>
                </div>
            </div>
        </>
    );
}