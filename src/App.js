import React from "react";
import { Amplify } from "aws-amplify";

import { Authenticator, Button } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ textAlign: "center" }}>
          <h1>Hello {user.username}</h1>
          <Button variation="primary" onClick={signOut}>
            Sign out
          </Button>

          <ul>
            <li></li>
          </ul>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
