import { useOthers } from "../liveblocks.config";
import { randomColor } from "../utils/helpers";
import Cursor from "./Cursor";

export default function LiveCursors() {
  const others = useOthers();

  if (others) {

  }

  return (
    <>
      {others.map(other => {
        if(other.presence) {
          return <Cursor color={`#${randomColor}`} x={other.presence.cursor?.x} y={other.presence.cursor?.y} />
        }
      })}
    </>
  );
}
