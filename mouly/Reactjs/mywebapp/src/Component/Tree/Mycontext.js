import React from 'react';

const MyContext = React.createContext();
const DadaProvider = MyContext.Provider
const PutiConsumer = MyContext.Consumer

export {DadaProvider,PutiConsumer}