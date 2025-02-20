import TSXFromStringRender from "@/components/TSXFromStringRender"
import { ChatWindow } from "../components/Home/ChatWindow"

function Home() {
  // component for the main page

  // home page arranged generally as side-by-side components, the chat and the recipe.
  return (
    <div className="home-page w-screen h-screen flex justify-between items-center absolute top-0 left-0 p-8 ">
      {/* ACTUAL CHAT SECTION */}
      <div className="chat-window-container w-[30vw] h-[88vh]">
        <ChatWindow />
      </div>

      {/* RENDERED RECIPE SECTION  */}
      <div className="recipe-section max-h-screen w-[60vw] y-3 pb-10 overflow-y-auto ">
        <TSXFromStringRender cn="rendered-recipe-content" />
      </div>
    </div>
  )
}

export default Home
