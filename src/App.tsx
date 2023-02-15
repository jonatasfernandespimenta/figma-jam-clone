import LiveCursors from "./componentes/LiveCursor";
import WhiteBoard from "./componentes/Whiteboard"
import PropertiesContextProvider from "./contexts/properties.context";
import { RoomProvider } from "./liveblocks.config";

function App() {

  return (
    <PropertiesContextProvider>
      <RoomProvider id="my-room-id" initialPresence={{ cursor: null }}>
        <LiveCursors />
        <WhiteBoard />
      </RoomProvider>
    </PropertiesContextProvider>
  )
}

export default App
