import { useCallback } from 'react';
import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { useUpdateMyPresence } from '../liveblocks.config';
import { EDGE_TYPES, INITIAL_NODES, NODE_TYPES } from '../utils/helpers';
import DeleteObjects from './DeleteObjects';
import { ToastContainer } from 'react-toastify';
import ShapesToolBar from './toolbars/ShapesToolBar';
import PropertiesToolBar from './toolbars/PropertiesToolbar';

function WhiteBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const updateMyPresence = useUpdateMyPresence();

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  return (
    <div
      className='w-screen h-screen'
      onPointerMove={(e) =>
        updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } })
      }
      onPointerLeave={() => updateMyPresence({ cursor: null })}
    >
      <ToastContainer />
      <ReactFlow
        edgeTypes={EDGE_TYPES}
        defaultEdgeOptions={{ type: 'default' }}
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        connectionMode={ConnectionMode.Loose}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
      >
        <Background size={2} gap={15} color='#ccc' />

        <DeleteObjects
          edges={edges}
          nodes={nodes}
          setEdges={setEdges}
          setNodes={setNodes}
        />

        <Controls />

        <MiniMap />
      </ReactFlow>

      <ShapesToolBar nodes={nodes} setNodes={setNodes} />

      <PropertiesToolBar nodes={nodes} setNodes={setNodes} />
    </div>
  )
}

export default WhiteBoard
