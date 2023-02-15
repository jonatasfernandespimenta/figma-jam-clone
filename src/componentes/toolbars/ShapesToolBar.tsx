import * as Toolbar from '@radix-ui/react-toolbar'
import { Node } from 'reactflow';
import { usePropertiesData } from '../../contexts/properties.context';

interface IShapesToolBar {
  nodes: Node<{}, string | undefined>[];
  setNodes: React.Dispatch<React.SetStateAction<Node<{}, string | undefined>[]>>;
}

export default function ShapesToolBar({ nodes, setNodes }: IShapesToolBar) {
  const { color } = usePropertiesData();

  function addNode(type: string) {
    const lastNode = nodes[nodes.length - 1];

    setNodes(nodes => [...nodes, {
      id: crypto.randomUUID(),
      type,
      position: {
        x: lastNode.position.x + Number(lastNode.width) + 50,
        y: lastNode.position.y,
      },
      data: {},
    }])
  }

  return (
    <Toolbar.Root className="-translate-x-1/2 left-1/2 overflow-hidden rounded-xl fixed bottom-20 bg-white shadow-lg border border-zinc-300 px-8 h-20 w-96 flex justify-around">
      <Toolbar.Button style={{ backgroundColor: color }} onClick={() => addNode('square')} className="w-20 h-20 mt-6 rounded transition-transform hover:-translate-y-2" />

      <Toolbar.Button style={{ backgroundColor: color }} onClick={() => addNode('circle')} className="w-20 h-20 mt-6 rounded-full transition-transform hover:-translate-y-2" />
    </Toolbar.Root>
  );
}
