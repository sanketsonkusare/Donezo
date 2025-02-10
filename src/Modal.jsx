
export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md" style={{ boxShadow: '5px 5px 8px 8px rgba(255, 255, 255, 0.5)' }}>
                <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:border-2 hover:border-solid" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}