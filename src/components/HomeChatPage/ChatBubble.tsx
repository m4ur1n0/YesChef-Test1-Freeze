import { ChatMessage } from "@/types/chat-entry"

type Props = {
    message : ChatMessage;
    key : number;
}

export const ChatBubble = ({message, key}: Props) => {
    // knows if it is user or bot -- align itself properly?
  return (
    <div 
        className={`flex rounded-xl w-fit max-w-[60%] h-auto p-2 border border-gray-100 ${message.role === "USER" ? "ml-auto" : "ml-0"}`}
        style={{
            backgroundColor : (message.role === "USER" ? "var(--yes-chef-teal-light)" : "rgb(17 24 39)")
        }}
        key={key}
    >

        <p 
            className="text-wrap text-left"
            style={{
                color : (message.role === "USER" ? "rgb(17 24 39)" : "#f1f1f1")
                
            }}
        >
            {message.message}
        </p>
        
    </div>
  )
}