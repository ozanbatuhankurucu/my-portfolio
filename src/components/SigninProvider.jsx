import React, { useState } from "react";

export default function SigninProvider(props) {
  const { Panel, MyBlog } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  if (user.username==="ozan" && user.password==="haksu") {
    console.log(user);
    return <Panel user={user} setUser={setUser} />;
  } else {
    return <MyBlog user={user} setUser={setUser} />;
    
  }
}
