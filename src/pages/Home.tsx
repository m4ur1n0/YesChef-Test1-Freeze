import { ChatWindow } from "../components/HomeChatPage/ChatWindow";
import React, { useState } from "react"
import { queryGemini_2_0 } from "../lib/gemini/Gemini";
import { CircleSlashIcon } from "lucide-react";


type Props = {}

function Home({}: Props) { // component for the main page

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");


  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();

    console.log(input);
    setInput('');

    const resp = await queryGemini_2_0(input);

    console.log(JSON.stringify(resp));
    setResponse(resp[0]);
  }

  // home page arranged generally as side-by-side components, the chat and the recipe.
  return (
    <div className='home-page flex justify-between items-center p-8 relative '>
      <div className="chat-window-container w-[40vw] h-[80vh]">
        <ChatWindow />
      </div>
        
    </div>
  )
}

export default Home