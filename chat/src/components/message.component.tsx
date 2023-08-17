interface MessageProps {
    ownMessage?: boolean
}

const Message = ({ownMessage}:MessageProps) => {
    return (
        <div className={`flex flex-col ${ownMessage ? `items-end` : `items-start`}`}>
            <div className={`p-4  w-5/6 rounded-md ${ownMessage ? `bg-slate-500` : `bg-slate-800`}`}>
                <p>Message text</p>
            </div>
            <p className="text-xs">Name</p>
        </div>
    )
}

export default Message;