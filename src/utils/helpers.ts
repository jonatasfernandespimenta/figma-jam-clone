import { Node } from "reactflow";
import DefaultEdge from "../componentes/edges/DefaultEdge";
import Circle from "../componentes/nodes/Circle";
import { Square } from "../componentes/nodes/Square";

export const randomColor = Math.floor(Math.random() * 16777215).toString(16);

export const NODE_TYPES = {
  square: Square,
  circle: Circle
}

export const EDGE_TYPES = {
  default: DefaultEdge
}

export const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400
    },
    data: {},
  },
]satisfies Node[]
