import React from "react";
import { Amplify } from "aws-amplify";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

function App() {
  return (
    <div>
      <h1>welcone to amplify</h1>
    </div>
  );
}

export default App;
