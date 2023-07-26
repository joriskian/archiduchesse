// creation du context react d'authentification
import React from 'react';

export const UserContext = React.createContext();

export default function Authentication() {
  return (
    <UserContext.Provider value="michel obama">
      <User></User>
    </UserContext.Provider>
  );
}

function User() {
  return (
    <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}
