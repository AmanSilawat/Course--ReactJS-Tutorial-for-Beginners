import React from 'react';

const UserContext = React.createContext('aaa');// set a default value in `React.createContext` this method
console.log(UserContext)

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }

export default UserContext;