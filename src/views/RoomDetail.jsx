"use client";

import { asset } from "../asset.js";

import Link from "next/link";
import { PillLink } from "../components/Pill.jsx";
import { rooms, suiteRates } from "../data.js";
import { useHeaderObserver } from "../site.jsx";

export default function RoomDetail({ slug }) {
  useHeaderObserver("dark");
  const room = rooms.find((item) => item.slug === slug) ?? rooms[0];

  return (
    <main className="page-pad" data-header="dark">
      <article className="room-detail">
        <div className="room-detail-copy">
          <h1 className="display">{room.name}</h1>
          <p>{room.description}</p>
          <div className="button-row">
            <PillLink to={`/inquiry?room=${room.slug}`}>INQUIRY</PillLink>
            <PillLink to={`/inquiry?room=${room.slug}`}>BOOK NOW</PillLink>
          </div>
        </div>
        <div className="room-detail-photo">
          <img src={room.image} alt="" />
          <ul className="room-stats">
            <li>
              <img className="icon-dark" src={asset("/assets/icon-area.svg")} alt="" width="24" height="24" />
              {room.area}
            </li>
            <li>
              <img className="icon-dark" src={asset("/assets/icon-person.svg")} alt="" width="24" height="24" />
              {room.guests}
            </li>
            <li>
              <img className="icon-dark" src={asset("/assets/icon-price.svg")} alt="" width="24" height="24" />
              {room.price}
            </li>
          </ul>
        </div>
      </article>

      {room.slug === "family-panorama-suite" && (
        <section className="suite-rates">
          <h2>Sommer 2024</h2>
          <div className="suite-rates-grid">
            <div>
              {suiteRates.map((block) => (
                <div key={block.season} className="rate-block">
                  <div className="rate-head">
                    <span>{block.season}</span>
                    <span>1 - 4 notti</span>
                    <span>Più di 4 notti</span>
                  </div>
                  {block.rows.map((row) => (
                    <div key={row.dates} className="rate-row">
                      <span>{row.dates}</span>
                      <span>{row.short}</span>
                      <span>{row.long}</span>
                    </div>
                  ))}
                </div>
              ))}
              <div className="rate-links">
                <Link href="/prices">
                  See price overview of all rooms <span aria-hidden="true">→</span>
                </Link>
                <Link href="/inquiry">
                  Special offers <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="rate-notes">
              <p>ALL PRICES ARE PER PERSON AND NIGHT EXCLUDING LOCAL TAX FOR A MINIMUM STAY OF FOUR NIGHTS.</p>
              <p>Local tax: The local tax is € 2.90 per person (aged 14 and over) per night and is not included in the price.</p>
              <p>Short stay: For bookings of 1-4 nights, we charge a surcharge of €10.00 per person on the daily rate.</p>
              <p>
                Single room supplement: The single room supplement is 20.00.- Euro per day in the standard rooms and
                35.00.- Euro per day in the suites (except high season, prices on request).
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
