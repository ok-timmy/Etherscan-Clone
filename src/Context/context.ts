import { EtherscanType } from './../Interfaces/EtherscanInterface';
import React, { useState } from "react";

export const EtherscanContext = React.createContext<EtherscanType | undefined>(
  undefined
);

const EtherscanProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [address, setAddress] = useState<string>("");

  return (
    <EtherscanContext.Provider value={{ address, setAddress }}>
      {children}
    </EtherscanContext.Provider>
  );
};

export default EtherscanProvider;