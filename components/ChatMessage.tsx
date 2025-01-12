import React from "react";
import { twMerge } from "tailwind-merge";

export interface ChatMessageInterface {
  sender: string;
  message: string;
  isOwnMessgae: boolean;
}

function ChatMessage({ message, sender, isOwnMessgae }: ChatMessageInterface) {
  const isSystemMessgae = sender === "system";

  return (
    <div
      className={twMerge(
        "flex ",
        isSystemMessgae
          ? "justify-center"
          : isOwnMessgae
          ? "justify-end"
          : "justify-start",
        "items-center"
      )}
    >
      <div
        className={twMerge(
          "max-w-xs px-4 py-3 rounded-lg",
          isSystemMessgae
            ? "bg-gray-600 text-black text-center text-xs"
            : isOwnMessgae
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
