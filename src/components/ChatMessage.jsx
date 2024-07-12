
function ChatMessage({avatar, message, alignment}) {
    return (<>
    
        <div className={`flex font-mono p-2 w-full ${alignment===1?'justify-end':'justify-start'} px-4 `}>
            
                <div className={`flex lvl1 gap-2 p-4 ${alignment===1? 'bg-slate-400 border-neutral-600 text-neutral-950':'bg-neutral-800 border-neutral-600'}  justify-center items-center rounded-2xl relative text-lg`}>

                    <span className="justify-center items-center">{message}</span>

                </div>
        </div>
    
    </>);
}

export default ChatMessage;