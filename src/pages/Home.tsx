import { MarkdownRender } from "@/components/MarkdownRender";
import { ChatWindow } from "../components/HomeChatPage/ChatWindow";


type Props = {}

function Home({}: Props) { // component for the main page


  // home page arranged generally as side-by-side components, the chat and the recipe.
  return (
    <div className='home-page w-screen h-screen flex justify-between items-center absolute top-0 left-0 p-8 '>
      {/* ACTUAL CHAT SECTION */}
      <div className="chat-window-container w-[30vw] h-[85vh] ">
        <ChatWindow />
      </div>

      {/* RENDERED RECIPE SECTION  */}
      <div className="recipe-section w-[60vw] h-screen overflow-y-scroll border border-black">
        <MarkdownRender />
      </div>
        
    </div>
  )
}

export default Home