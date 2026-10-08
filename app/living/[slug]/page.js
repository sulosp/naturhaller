import { rooms } from "../../../src/data.js";
import RoomDetail from "../../../src/views/RoomDetail.jsx";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <RoomDetail slug={slug} />;
}
