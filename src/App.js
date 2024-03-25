import React from "react";
import { RecoilRoot } from "recoil";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>Recoil Example</h1>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
