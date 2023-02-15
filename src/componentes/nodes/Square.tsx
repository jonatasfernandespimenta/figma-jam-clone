import { NodeResizer } from "@reactflow/node-resizer";
import { NodeProps, Handle, Position, useOnSelectionChange } from "reactflow";

import '@reactflow/node-resizer/dist/style.css';

export function Square(props: NodeProps) {
  return (
    <div className="bg-violet-500 w-full h-full rounded min-w-[100px] min-h-[100px]">
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
    </div>
  );
}
