"use client";

import RoomCards from "../components/RoomCards.jsx";
import { useHeaderObserver } from "../site.jsx";

export default function Rooms() {
  useHeaderObserver("dark");

  return (
    <main className="page-pad">
      <section className="rooms-band page-section" data-header="dark">
        <div className="rooms-intro">
          <p className="eyebrow">Just find the right one</p>
          <h1>Our room categories</h1>
          <p>here everyone will find their own oasis of well-being</p>
        </div>
        <RoomCards />
      </section>
    </main>
  );
}
