"use client";

import { asset } from "../asset.js";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { rooms } from "../data.js";

const GAP = 24;

export default function RoomCards() {
  const frameRef = useRef(null);
  const trackRef = useRef(null);
  const cursor = useRef(rooms.length);
  const cardWidthRef = useRef(0);
  const previous = useRef(null);
  const [active, setActive] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  function xFor(position, width = cardWidthRef.current) {
    const step = width + GAP;
    return width / 2 + GAP - position * step;
  }

  function settle() {
    const count = rooms.length;
    let next = cursor.current;
    if (next >= count * 2) next -= count;
    else if (next < count) next += count;
    if (next === cursor.current) return;
    cursor.current = next;
    gsap.set(trackRef.current, { x: xFor(next) });
  }

  useLayoutEffect(() => {
    const frame = frameRef.current;
    function measure() {
      const width = (frame.clientWidth - GAP * 3) / 3;
      cardWidthRef.current = width;
      setCardWidth(width);
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!cardWidth || !trackRef.current) return;
    const destination = xFor(cursor.current, cardWidth);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (previous.current === null || previous.current === active || reduce) {
      previous.current = active;
      gsap.set(trackRef.current, { x: destination });
      return;
    }
    previous.current = active;
    gsap.to(trackRef.current, {
      x: destination,
      duration: 0.85,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: settle,
    });
  }, [active, cardWidth]);

  function step(direction) {
    cursor.current += direction;
    setActive((value) => (value + direction + rooms.length) % rooms.length);
  }

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || !cardWidth) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = window.setInterval(() => {
      cursor.current += 1;
      setActive((value) => (value + 1) % rooms.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [paused, active, cardWidth]);

  function goTo(index) {
    const count = rooms.length;
    const current = ((cursor.current % count) + count) % count;
    cursor.current += index - current;
    setActive(index);
  }

  return (
    <div className="room-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="room-frame" ref={frameRef}>
        <div className="room-track" ref={trackRef}>
          {[0, 1, 2].map((copy) =>
            rooms.map((room) => (
              <Link
                className="room-card"
                key={`${copy}-${room.slug}`}
                href={`/living/${room.slug}`}
                style={cardWidth ? { width: cardWidth, flexBasis: cardWidth } : undefined}
                tabIndex={copy === 1 ? undefined : -1}
                aria-hidden={copy === 1 ? undefined : true}
              >
                <img className="room-card-photo" src={room.image} alt="" />
                <span className="room-card-name">{room.name}</span>
                <div className="room-card-facts">
                  <div className="room-fact">
                    <img src={asset("/assets/icon-area.svg")} alt="" width="24" height="24" />
                    {room.area}
                  </div>
                  <div className="room-fact">
                    <img src={asset("/assets/icon-person.svg")} alt="" width="24" height="24" />
                    {room.guests}
                  </div>
                  <div className="room-fact">
                    <img src={asset("/assets/icon-price.svg")} alt="" width="24" height="24" />
                    {room.price}
                  </div>
                </div>
              </Link>
            )),
          )}
        </div>
        <button className="story-arrow story-arrow-left room-arrow" type="button" aria-label="Previous room" onClick={() => step(-1)} />
        <button className="story-arrow story-arrow-right room-arrow" type="button" aria-label="Next room" onClick={() => step(1)} />
      </div>
      <div className="room-radios" role="radiogroup" aria-label="Room categories">
        {rooms.map((room, index) => (
          <button
            key={room.slug}
            type="button"
            role="radio"
            aria-label={room.name}
            aria-checked={index === active}
            className={index === active ? "is-active" : undefined}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
