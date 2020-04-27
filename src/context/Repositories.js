import React, { createContext, useContext, useState } from "react";

const RepositoriesContext = createContext();

export default function RepositoriesProvider({ children }) {
  const [repositories, setRepositories] = useState([])

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        setRepositories
      }}
    >
      { children }
    </RepositoriesContext.Provider>
  )
}

export function useRepositories() {
  const context = useContext(RepositoriesContext);
  const { repositories, setRepositories } = context;

  return { repositories, setRepositories }
}
