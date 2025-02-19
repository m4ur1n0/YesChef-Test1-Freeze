import { jsx as _jsx } from "react/jsx-runtime";
export const ChatBubble = ({ message }) => {
    // knows if it is user or bot -- align itself properly?
    return (_jsx("div", { className: `flex rounded-xl w-fit max-w-[75%] h-auto p-2 border border-gray-100 ${message.role === "USER" ? "ml-auto" : "ml-0"}`, style: {
            backgroundColor: message.role === "USER"
                ? "var(--yes-chef-teal-light)"
                : "rgb(17 24 39)",
        }, children: _jsx("p", { className: "text-wrap text-left", style: {
                color: message.role === "USER" ? "rgb(17 24 39)" : "#f1f1f1",
            }, children: message.message }) }));
};
