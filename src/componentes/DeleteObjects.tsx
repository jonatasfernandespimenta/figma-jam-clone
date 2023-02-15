import { Edge, Node, useOnSelectionChange } from "reactflow";
import { useEffect, useState } from 'react';

interface IDeleteObjects {
  edges: Edge<any>[];
  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;
  nodes: Node<{}, string | undefined>[];
  setNodes: React.Dispatch<React.SetStateAction<Node<{}, string | undefined>[]>>;
}

export default function DeleteObjects(props: IDeleteObjects) {
  const { edges, nodes, setEdges, setNodes } = props;

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [nodes])

  const detectKeyDown = (e: any) => {
    if (e.ctrlKey && e.key === 'z') {
      if (nodes.length > 0) {
        const clonedNodes = nodes;
        clonedNodes.pop();

        const clonedEdges = edges;
        clonedEdges.pop();

        setEdges(clonedEdges);
        setNodes(clonedNodes);
      }
    }
  }

  return null;
}