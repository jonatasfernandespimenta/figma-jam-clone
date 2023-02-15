import LiveCursors from "./componentes/LiveCursor";
import WhiteBoard from "./componentes/Whiteboard"
import { RoomProvider } from "./liveblocks.config";

function App() {

  return (
    <RoomProvider id="my-room-id" initialPresence={{ cursor: null }}>
      <LiveCursors />
      <WhiteBoard />
    </RoomProvider>
  )
}

export default App
