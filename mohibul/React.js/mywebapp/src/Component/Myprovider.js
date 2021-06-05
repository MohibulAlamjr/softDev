import React from 'react';

const Mycontext=React.createContext();
const DadaProvider = Mycontext.Provider
const PutiConsumer=Mycontext.Consumer

export {DadaProvider,PutiConsumer}