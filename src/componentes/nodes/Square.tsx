import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position, useOnSelectionChange } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';
import { useEffect, useRef, useState } from "react";
import { usePropertiesData } from "../../contexts/properties.context";

export function Square(props: NodeProps) {
  const [text, setText] = useState('');
  const [active, setActive] = useState(false);

  const nodeRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const { setSelectedNode, color } = usePropertiesData();

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.target.value = '';
      setActive(false)
    }
  };

  useEffect(() => {
    if(!props.selected) {
      setSelectedNode(null)
    }
  }, [props.selected])

  const handleSelection = () => {
    setSelectedNode(nodeRef);
  }

  return (
    <div
      ref={nodeRef}
      onDoubleClick={() => setActive(true)}
      onClick={handleSelection}
      style={{ background: color }} className="w-full h-full rounded min-w-[100px] min-h-[100px] color-white flex justify-center text-center items-center p-4"
    >
      <NodeResizer
        isVisible={props.selected}
        minWidth={100}
        minHeight={100}
        lineClassName="border-blue-400"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
      />

      <Handle
        id='right'
        position={Position.Right}
        type="source"
        style={{ borderRadius: 100, marginRight: -4, background: '#4bdbde', border: 'none' }}
      />

      <Handle
        id='left'
        position={Position.Left}
        type="source"
        style={{ borderRadius: 100, marginLeft: -4, background: '#4bdbde', border: 'none' }}
      />

      <Handle
        id='top'
        position={Position.Top}
        type="source"
        style={{ borderRadius: 100, marginTop: -4, background: '#4bdbde', border: 'none' }}
      />

      <Handle
        id='bottom'
        position={Position.Bottom}
        type="source"
        style={{ borderRadius: 100, marginBottom: -4, background: '#4bdbde', border: 'none' }}
      />

      {
        active ?
          <input className="h-8 bg-transparent w-full text-white focus:outline-none" onKeyDown={handleKeyDown} value={text} onChange={(e) => setText(e.target.value)} />
          :
          <p className="h-8 bg-transparent text-white">{text}</p>
      }

    </div>
  );
}
