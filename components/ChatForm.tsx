"use client";

import React from "react";
import { SendHorizonal } from "lucide-react";

export interface ChatFormInterface {
  onSendMessage: (message: string) => void;
}

const ChatForm: React.FC<ChatFormInterface> = ({ onSendMessage }) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="flex-1 px-2 border-2 rounded-lg focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg whitespace-nowrap gap-x-2 flex items-center hover:bg-blue-600 group"
      >
        Send
        <SendHorizonal
          size={16}
          className="group-hover:-rotate-45 transition-all"
        />
      </button>
    </form>
  );
};

export default ChatForm;
