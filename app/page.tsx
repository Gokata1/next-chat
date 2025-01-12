"use client";

import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import JoinRoom from "@/components/JoinRoom";
import { useState } from "react";

export default function Home() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);

  const handleSendMessage = (msg: string) => {
    console.log(msg);
  };

  return (
    <div className="flex justify-center w-full h-full py-4">
      {!joined ? (
        <JoinRoom
          username={userName}
          roomId={room}
          setJoined={setJoined}
          setRoom={setRoom}
          setUserName={setUserName}
        />
      ) : (
        <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
          <h1 className="font-bold text-3xl">Room: 1</h1>
          <div className="bg-gray-200 overflow-y-auto h-full grow border-2 border-gray-500 rounded-lg p-4 mt-4">
            {messages.map((message, index) => {
              return (
                <ChatMessage
                  key={index}
                  message={message.message}
                  sender={message.sender}
                  isOwnMessgae={message.sender === userName}
                />
              );
            })}
          </div>
          <ChatForm onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}
