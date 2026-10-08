"use client";

import { asset } from "../asset.js";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { rooms } from "../data.js";
import { useHeaderObserver } from "../site.jsx";

const fields = [
  { name: "salutation", label: "Salutation", type: "select", options: ["", "Ms", "Mr", "Mx"] },
  { name: "firstName", label: "First Name *", required: true },
  { name: "lastName", label: "Last Name *", required: true },
  { name: "email", label: "Email Address *", required: true, type: "email" },
  { name: "phone", label: "Phone No. *", required: true },
  { name: "zip", label: "ZIP *", required: true },
  { name: "street", label: "Street Address *", required: true },
  { name: "city", label: "City *", required: true },
  { name: "country", label: "Country *", required: true },
];

export default function Inquiry() {
  useHeaderObserver("dark");
  const params = useSearchParams();
  const room = rooms.find((item) => item.slug === params.get("room"));
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const missing = fields.some((field) => field.required && !String(data.get(field.name) || "").trim());
    if (missing) {
      event.currentTarget.reportValidity();
      return;
    }
    setSent(true);
  }

  return (
    <main className="page-pad inquiry" data-header="dark">
      <section className="inquiry-layout">
        <div className="inquiry-intro">
          <img src={asset("/assets/inquiry.png")} alt="The valley around Naturhotel Haller" />
          <h1 className="display">Inquiry</h1>
          <p className="inquiry-sub">for your dream vacation at our hotel</p>
          {room && <p className="inquiry-room">Regarding {room.name}</p>}
        </div>
        <form className="inquiry-form" onSubmit={onSubmit}>
          <h2>Personal Information</h2>
          {sent ? (
            <p className="inquiry-thanks">
              Thank you. Your inquiry{room ? ` for the ${room.name}` : ""} is ready for the hotel. We will
              be in touch about your stay.
            </p>
          ) : (
            <>
              <label className="field field-select">
                <span className="sr-only">Salutation</span>
                <select name="salutation" defaultValue="">
                  <option value="">Salutation</option>
                  <option>Ms</option>
                  <option>Mr</option>
                  <option>Mx</option>
                </select>
                <img src={asset("/assets/icon-chevron.svg")} alt="" width="24" height="24" />
              </label>
              <label className="field">
                <span className="sr-only">First Name</span>
                <input name="firstName" placeholder="First Name *" required />
              </label>
              <label className="field">
                <span className="sr-only">Last Name</span>
                <input name="lastName" placeholder="Last Name *" required />
              </label>
              <div className="field-row">
                <label className="field">
                  <span className="sr-only">Email Address</span>
                  <input name="email" type="email" placeholder="Email Address *" required />
                </label>
                <label className="field">
                  <span className="sr-only">Phone No.</span>
                  <input name="phone" placeholder="Phone No. *" required />
                </label>
              </div>
              <label className="field">
                <span className="sr-only">ZIP</span>
                <input name="zip" placeholder="ZIP *" required />
              </label>
              <label className="field">
                <span className="sr-only">Street Address</span>
                <input name="street" placeholder="Street Address *" required />
              </label>
              <div className="field-row">
                <label className="field">
                  <span className="sr-only">City</span>
                  <input name="city" placeholder="City *" required />
                </label>
                <label className="field">
                  <span className="sr-only">Country</span>
                  <input name="country" placeholder="Country *" required />
                </label>
              </div>
              <button className="pill" type="submit">
                SUBMIT
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}
