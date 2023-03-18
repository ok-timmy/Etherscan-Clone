import { EtherscanType } from '../Interfaces/EtherscanInterface';
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const EtherscanContext = React.createContext<EtherscanType | undefined>(
  undefined
);

const EtherscanProvider: React.FC<Props> = ({ children }) => {
  const [address, setAddress] = useState<string>("");

  return (
    <EtherscanContext.Provider value={{ address, setAddress }}>
      {children}
    </EtherscanContext.Provider>
  );
};

export default EtherscanProvider;