export default function TaskSideBar() {
    return(
        <>
            <div className="flex">
                <p className="ml-4 w-36">Completed tasks</p>
                <div className="flex-grow">
                    <div className="h-full w-px bg-gray-300 ml-6"></div>
                </div>
            </div>
        </>
    );
}