import { useCallback } from 'react';
import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, MiniMap, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import * as Toolbar from '@radix-ui/react-toolbar'
import { useUpdateMyPresence } from '../liveblocks.config';
import { EDGE_TYPES, INITIAL_NODES, NODE_TYPES } from '../utils/helpers';
import DeleteObjects from './DeleteObjects';
import { ToastContainer } from 'react-toastify';

function WhiteBoard() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const updateMyPresence = useUpdateMyPresence();

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addNode(type: string) {
    const lastNode = nodes[nodes.length-1];

    setNodes(nodes => [...nodes, {
      id: crypto.randomUUID(),
      type,
      position: {
        x: lastNode.position.x + 150,
        y: lastNode.position.y
      },
      data: {},
    }])
  }

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


      <Toolbar.Root className="-translate-x-1/2 left-1/2 overflow-hidden rounded-xl fixed bottom-20 bg-white shadow-lg border border-zinc-300 px-8 h-20 w-96 flex justify-around">
        <Toolbar.Button onClick={() => addNode('square')} className="w-20 h-20 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2" />

        <Toolbar.Button onClick={() => addNode('circle')} className="w-20 h-20 bg-violet-500 mt-6 rounded-full transition-transform hover:-translate-y-2" />
      </Toolbar.Root>
    </div>
  )
}

export default WhiteBoard
