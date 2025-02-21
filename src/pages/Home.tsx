import TSXFromStringRender from "@/components/TSXFromStringRender"

import { useRecipe } from "@/context/RecipeContext";

import { ChatWindow } from "../components/Home/ChatWindow"

function Home() {
  // component for the main page

  const {isInit, showRendering} = useRecipe();


  // home page arranged generally as side-by-side components, the chat and the recipe.
  return (
    <div className="home-page w-screen h-screen flex justify-center gap-20 items-center absolute top-0 left-0 p-8 transition-all">
      {/* ACTUAL CHAT SECTION */}
      <div 
        className="chat-window-container transition-all duration-1000 ease-in-out absolute"
        style={{
          width : isInit ? '60vw' : '30vw',
          height : isInit ? '55vh' : '88vh',
          // transform : !isInit ? "translateX(-30vw)" : "translateX(0)",
          left : isInit ? '20vw' : '3vw'

        }}
      >
        <ChatWindow />
      </div>

      {/* RENDERED RECIPE SECTION  */}
      {showRendering && 
        <div className="recipe-section max-h-screen w-[60vw] y-3 pb-10 overflow-y-auto animate-fadeIn absolute right-[3vw]">
          <TSXFromStringRender cn="rendered-recipe-content" />
        </div>
      }
    </div>
  )
}

export default Home
