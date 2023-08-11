import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

function ChatsPage(props) {
  //   const publicID = process.env.REACT_APP_CHAT_ENGINE_PUBLIC_KEY; // Updated variable access
  const chatProps = useMultiChatLogic(
    "1e7bbab8-1917-4886-a70f-3d9646086b8a",
    props.user.username,
    props.user.secret
  );
  const logOut = () => {
    localStorage.removeItem("username");
    location.reload();
  };
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
}

export default ChatsPage;
