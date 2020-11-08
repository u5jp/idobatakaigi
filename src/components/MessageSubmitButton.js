import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { pushMessage } from "../firebase";

function MessageSubmitButton({ name, setText, text }) {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "テスト太郎", text });
        setText("");
      }}
    >
      <SendIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;
