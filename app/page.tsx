"use client";

import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import JoinRoom from "@/components/JoinRoom";
import React from "react";
import { socket } from "@/lib/socket.client";

export default function Home() {
  const [room, setRoom] = React.useState("");
  const [joined, setJoined] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [messages, setMessages] = React.useState<
    { sender: string; message: string }[]
  >([]);

  const handleSendMessage = (msg: string) => {
    socket.emit("message", { room, username: userName, message: msg });
    setMessages((prev) => [...prev, { sender: userName, message: msg }]);
  };

  const handleUserJoin = () => {
    socket.emit("join-room", { room, username: userName });
  };

  React.useEffect(() => {
    socket.on("user_joined", (message) => {
      setMessages((prev) => [...prev, { sender: "system", message }]);
    });

    socket.on("message", ({ sender, message }) => {
      console.log(">>>>>>>", sender, message);
      setMessages((prev) => [...prev, { sender: sender, message: message }]);
    });

    return () => {
      socket.off("user_joined");
      socket.off("message");
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full py-4">
      {!joined ? (
        <JoinRoom
          username={userName}
          roomId={room}
          setJoined={setJoined}
          setRoom={setRoom}
          setUserName={setUserName}
          onJoin={handleUserJoin}
        />
      ) : (
        <div className="w-full max-w-3xl mx-auto flex flex-col h-full">
          <h1 className="font-bold text-3xl">Room: {room}</h1>
          <div className="bg-gray-200 overflow-y-auto h-full grow border-2 border-gray-500 rounded-lg p-4 mt-4 flex flex-col gap-y-2">
            {messages.map((message, index) => {
              return (
                <ChatMessage
                  key={index}
                  message={message.message}
                  sender={message.sender === userName ? "You" : message.sender}
                  isOwnMessage={message.sender === userName}
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
