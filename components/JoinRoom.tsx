"use client";

import React, { Dispatch, SetStateAction } from "react";

export interface JoinRoomInterface {
  roomId: string;
  username: string;
  setJoined: Dispatch<SetStateAction<boolean>>;
  setUserName: Dispatch<SetStateAction<string>>;
  setRoom: Dispatch<SetStateAction<string>>;
  onJoin: () => void;
}

function JoinRoom({
  username,
  roomId,
  setJoined,
  setUserName,
  setRoom,
  onJoin,
}: JoinRoomInterface) {
  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomId !== "" && username !== "") {
      onJoin();
      setJoined(true);
    } else {
      alert("Please enter a valid username and roomid");
    }
  };

  return (
    <form
      className="flex flex-col gap-y-4 w-full h-52"
      onSubmit={handleJoinRoom}
    >
      <div className="flex flex-col gap-y-1">
        <label className="font-bold text-gray-500" htmlFor="username">
          User name:
        </label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="flex-1 px-2 border-2 rounded-lg focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label className="font-bold text-gray-500" htmlFor="room_id">
          Room ID:
        </label>
        <input
          name="room_id"
          value={roomId}
          onChange={(e) => setRoom(e.target.value)}
          className="flex-1 px-2 border-2 rounded-lg focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg whitespace-nowrap gap-x-2 flex justify-center items-center hover:bg-blue-600"
      >
        Join Room
      </button>
    </form>
  );
}

export default JoinRoom;
