import React from "react";
import { twMerge } from "tailwind-merge";

export interface ChatMessageInterface {
  sender: string;
  message: string;
  isOwnMessage: boolean;
}

function ChatMessage({ message, sender, isOwnMessage }: ChatMessageInterface) {
  const isSystemMessgae = sender === "system";

  return (
    <div
      className={twMerge(
        "flex ",
        isSystemMessgae
          ? "justify-center"
          : isOwnMessage
          ? "justify-end"
          : "justify-start",
        "items-center"
      )}
    >
      <div
        className={twMerge(
          "max-w-xs px-3 py-2 rounded-lg",
          isSystemMessgae
            ? "bg-gray-300 text-black text-center text-xs"
            : isOwnMessage
            ? "bg-blue-400 text-white"
            : "bg-white text-black"
        )}
      >
        {!isSystemMessgae && <p className="text-sm font-bold">{sender}</p>}
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
