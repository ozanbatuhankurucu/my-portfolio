import React from "react";
import SigninProvider from "./components/SigninProvider";
import MyBlog from "./myblog/MyBlog";
import Panel from "./panel/Panel";
function App() {
  return (
    <SigninProvider Panel={Panel} MyBlog={MyBlog} />
  );
}

export default App;
