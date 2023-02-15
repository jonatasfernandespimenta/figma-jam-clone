import * as Toolbar from "@radix-ui/react-toolbar";
import { useEffect } from "react";
import { Node } from "reactflow";
import { usePropertiesData } from "../../contexts/properties.context";

interface IPropertiesToolbar {
  nodes: Node<{}, string | undefined>[];
  setNodes: React.Dispatch<React.SetStateAction<Node<{}, string | undefined>[]>>;
}

export default function PropertiesToolBar({ nodes, setNodes }: IPropertiesToolbar) {
  const { setColor, selectedNode, color } = usePropertiesData();

  return(
    <Toolbar.Root className="py-4 -translate-y-1/2 top-1/2 right-5 overflow-hidden rounded-xl fixed bg-white shadow-lg border border-zinc-300 px-8 h-[600px] w-[200px] flex justify-around">
      <input type={'color'} onChange={(e) => setColor(e.target.value)} value={color} />
    </Toolbar.Root>
  );
}
