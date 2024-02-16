import LoginForm from "../auth/LoginForm";

export default function ModalLogin({onClose }) {
    return (
        <>

            <div className="fixed bg-white inset-0 opacity-70"></div>
            <div className="fixed inset-0">
                <div className="flex items-center justify-center min-h-full py-8">
                    <div
                        className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)] max-h-[calc(100vh-4rem)] flex flex-col"
                        
                    >
                        <div className="border-b flex justify-between items-center p-4">
                            <button className="invisible">&#10005;</button>
                            <button onClick={onClose}>&#10005;</button>
                        </div>
                        <div className="overflow-auto"><LoginForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}