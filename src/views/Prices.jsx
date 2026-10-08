"use client";

import { priceRows, priceSeasons } from "../data.js";
import { useHeaderObserver } from "../site.jsx";

export default function Prices() {
  useHeaderObserver("dark");

  return (
    <main className="page-pad prices" data-header="dark">
      <p className="eyebrow">Info</p>
      <h1>Price list of the Nature Hotel Haller</h1>
      <div className="price-table" role="table">
        <div className="price-head" role="row">
          <span />
          {priceSeasons.map((season) => (
            <span key={season.range}>
              <strong>{season.label}</strong>
              {season.range}
            </span>
          ))}
        </div>
        {priceRows.map((room) => (
          <div className="price-room" key={room} role="rowgroup">
            <p>{room}</p>
            <div>
              <span>1 - 3 nights</span>
              <span>€ 120,00/€ 110,00</span>
              <span>€ 120,00/€ 110,00</span>
              <span>€ 120,00/€ 110,00</span>
            </div>
            <div>
              <span>more than 3 nights</span>
              <span>€ 120,00/€ 110,00</span>
              <span>€ 120,00/€ 110,00</span>
              <span>€ 120,00/€ 110,00</span>
            </div>
          </div>
        ))}
      </div>
      <p className="price-note">
        All prices are per person and night excluding local tax. The local tax is € 2.90 per person (aged
        14 and over) per night. For bookings of 1–4 nights, a surcharge of € 10.00 per person applies on
        the daily rate.
      </p>
    </main>
  );
}
