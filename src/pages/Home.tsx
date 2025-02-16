import React, { useState } from "react"
import { queryHuggingFace } from "../lib/hugging_face/huggingFace";


type Props = {}

function Home({}: Props) { // component for the main page

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");


  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();

    console.log(input);
    setInput('');

    const resp = await queryHuggingFace(input, "gpt2");

    console.log(JSON.stringify(resp));
    setResponse(resp[0].generated_text);
  }

  return (
    <div>
        <p>Home!</p>
        <form className='mb-10' onSubmit={handleSubmit}>
          <input type="text" className="w-[60vw]" onChange={(e) => {setInput(e.target.value)}} value={input} />
          <button type="submit" className="bg-gray-500">Submit</button>

        </form>

        <p>
          {response}
        </p>
    </div>
  )
}

export default Home