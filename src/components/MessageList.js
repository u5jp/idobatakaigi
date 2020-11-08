import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { messageRef, messagesRef } from "../firebase";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

function MessageList() {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(5)
      .on("value", (snapshot) => {
        const messages = snapshot.val();
        if (messages === null) return;
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          // const key = entry[0];
          // const nameAndText = entry[1];
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);

  return <div className={classes.root}>MessageList</div>;
}

export default MessageList;
