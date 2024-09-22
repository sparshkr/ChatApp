// "use client";

// import { getSocket } from "@/lib/socket.config";
// import React, { useEffect, useMemo } from "react";
// import { Button } from "../ui/button";

// export default function ChatBase({ groupId }: { groupId: string }) {
//   let socket = useMemo(() => {
//     let socketInstance = getSocket();
//     socketInstance.auth = {
//       room: groupId,
//     };
//     return socketInstance.connect();
//   }, []);

//   useEffect(() => {
//     const handleMessage = (data: any) => {
//       console.log("Message: ", data);
//     };

//     socket.on("message", handleMessage);

//     return () => {
//       socket.close(); // Close the connection on component unmount
//     };
//   }, []);

//   const handleClick = () => {
//     console.log("Click Detected");

//     socket.emit("message", { name: "Sparsh" });
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>Send</Button>
//       <p>ChatBase</p>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect, useMemo, Fragment } from "react";
import ChatNav from "./chatNav";
import ChatUserDialog from "./ChatUserDialog";
import ChatSidebar from "./ChatSidebar";
import Chats from "./chats";

export default function ChatBase({
  group,
  users,
  oldMessages,
}: {
  group: GroupChatType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> | [];
}) {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();
  useEffect(() => {
    const data = localStorage.getItem(group.id);
    if (data) {
      const pData = JSON.parse(data);
      setChatUser(pData);
    }
  }, [group.id]);
  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} users={users} user={chatUser} />
        )}

        {/* Messages */}
        <Chats oldMessages={oldMessages} group={group} chatUser={chatUser} />
      </div>
    </div>
  );
}
