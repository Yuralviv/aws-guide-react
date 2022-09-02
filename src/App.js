import React, { useEffect } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";

import { Authenticator, Button } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";

import { listLists } from "./graphql/queries";

import awsConfig from "./aws-exports";
import { useState } from "react";

Amplify.configure(awsConfig);

// test user: teroxil470@ulforex.com

function App() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const result = await API.graphql(graphqlOperation(listLists));
    console.log(result);
  };

  useEffect(() => {
    fetchList();
  }, []);
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
