import React, { useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  NodeTypes,
} from "reactflow";
import "reactflow/dist/style.css";

import ContextMenu from "./components/ContextMenu";
import TensorNode from "./components/node/TensorNode";

const initialNodes: Node<{ label: string }>[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: 'tensor' },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' }, type: 'tensor' },
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const nodeTypes: NodeTypes = {
  tensor: TensorNode,
}

const App = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const onConnect = useCallback((params: any) => setEdges((edges) => addEdge(params, edges)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      onNodeContextMenu={(event, node) => console.log('onNodeContextMenu', node)}
      onContextMenu={(event) => {
        event.preventDefault();
        setContextMenuPosition({ x: event.clientX, y: event.clientY });
        setContextMenuVisible(true);
      }}
    >
      <MiniMap />
      <Controls />
      <Background />
      {contextMenuVisible && (
        <ContextMenu
          x={contextMenuPosition.x}
          y={contextMenuPosition.y}
        />
      )}
    </ReactFlow>
  );
}

export default App