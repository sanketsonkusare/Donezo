import { useState } from 'react';
import TaskCard from "./TaskCard";
import TaskSideBar from "./TaskSideBar";
import Modal from "./LoginModal";

export default function Tasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="flex flex-row w-full">
                    <h1 className="text-2xl p-4 pl-6 mb-8">Hello username</h1>
                    <button
                        className="text-2xl p-4 pl-6 ml-8 mt-3 bg-gray-700 text-white rounded-2xl h-1/2"
                        onClick={openModal}
                    >
                        + Add Task
                    </button>
                </div>
                <div className="flex flex-row h-full">
                    <TaskSideBar />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <form className=" text-gray-800 flex flex-col space-y-4">
                    <h2 className="text-xl font-semibold">Add New Task</h2>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Task Name</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>To-do</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Categories</label>
                        <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>Personal</option>
                            <option>Work</option>
                            <option>Health</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Due Date</label>
                        <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded p-2">Add Task</button>
                </form>
            </Modal>
        </>
    );
}