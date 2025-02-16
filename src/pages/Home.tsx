import React, { useState } from "react"
import { queryGemini_2_0 } from "../lib/gemini/Gemini";


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

  return (
    <div>
        <p>Home!</p>
        <form className='mb-10' onSubmit={handleSubmit}>
          <input type="text" className="w-[60vw] mt-4" onChange={(e) => {setInput(e.target.value)}} value={input} />
          <button type="submit" className="bg-gray-500 mx-4">Submit</button>

        </form>

        <p className="mt-3">
          {response}
        </p>
    </div>
  )
}

export default Home