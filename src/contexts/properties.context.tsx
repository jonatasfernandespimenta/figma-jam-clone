import { createContext, useContext, useState } from "react";

interface IPropertiesContext {
  selectedNode: React.RefObject<HTMLDivElement> | null;
  setSelectedNode: (selectedNode: any) => void;
  color: string;
  setColor: (color: string) => void;
}

export const PropertiesContext = createContext({} as IPropertiesContext)

export default function PropertiesContextProvider({ children }: any) {
  const [color, setColor] = useState('#8b5cf6')
  const [selectedNode, setSelectedNode] = useState(null);

  return(
    <PropertiesContext.Provider
      value={{
        color,
        setColor,
        selectedNode,
        setSelectedNode,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export function usePropertiesData() {
  const context = useContext(PropertiesContext);

  if (context === undefined) {
    throw new Error("usePropertiesData must be used within a PropertiesContextProvider");
  }

  return context;
}
