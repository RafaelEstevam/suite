const Contact = () => {
    return (
        <div className="flex bg-slate-300 rounded items-center">
            <div className="py-4 pl-4">
                <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
            </div>
            <div className="p-4">
                <p className="text-slate-800 text-sm">Nome</p>
                <p className="text-green-700 text-xs">Online</p>
                {/* <p className="text-red-700 text-xs">Offline</p> */}
            </div>
        </div>
    )
};

export default Contact;