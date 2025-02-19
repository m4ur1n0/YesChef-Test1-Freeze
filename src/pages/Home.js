import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TSXFromStringRender from "@/components/TSXFromStringRender";
import { ChatWindow } from "../components/HomeChatPage/ChatWindow";
function Home() {
    // component for the main page
    // home page arranged generally as side-by-side components, the chat and the recipe.
    return (_jsxs("div", { className: "home-page w-screen h-screen flex justify-between items-center absolute top-0 left-0 p-8 ", children: [_jsx("div", { className: "chat-window-container w-[35vw] h-[85vh]", children: _jsx(ChatWindow, {}) }), _jsx("div", { className: "recipe-section h-screen overflow-y-auto p-10", children: _jsx(TSXFromStringRender, { cn: "rendered-recipe-content" }) })] }));
}
export default Home;
