import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_OlsIw5320okGzdJjDmrcf6E8ph7RDHGoHKRY8Zcc3W_bPhfTwa_WpxbEHJcuQIlT",
});

type Presence = {
  cursor: { x: number; y: number } | null;
};

export const { RoomProvider, useOthers, useUpdateMyPresence } = createRoomContext<Presence>(client);
