import { useState } from "react";
import LogoutBtn from "./assets/Components/LogoutBtn";
import Loginbtn from "./assets/Components/Loginbtn";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  // With Early return
  if (!isLoggedIn) {
    return <Loginbtn />;
  }

  // With Logical operator
  return (
    <div>
      <h1>Welcome Everyone To my Coding Journey</h1>
      <div>{isLoggedIn && <LogoutBtn />}</div>
    </div>
  );

  // with ternery operators
  // return <div>{isLoggedIn ? <LogoutBtn /> : <Loginbtn />}</div>;

  // with if-else condition
  // if (isLoggedIn) {
  //   return <LogoutBtn />;
  // } else {
  //   return <LogoutBtn />;
  // }
}

export default App;
