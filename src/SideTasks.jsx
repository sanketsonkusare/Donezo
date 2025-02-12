import { useState } from 'react';

export default function SideTasks() {
    const [hoveredTask, setHoveredTask] = useState(null);

    const handleMouseEnter = (taskId) => {
        setHoveredTask(taskId);
    };

    const handleMouseLeave = () => {
        setHoveredTask(null);
    };

    return(
        <>
        <div
        className="relative ml-4 mb-2 bg-gray-700 text-white rounded-2xl p-2"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}>
            Task name{hoveredTask === 1 && (
            <button
            className="absolute top-0 right-0 bg-red-500 text-white rounded-full"
            onClick={() => console.log('Delete task')}>
                &times;
            </button>)}
        </div>
        </>
    );
}