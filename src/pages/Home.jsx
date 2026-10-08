import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import RoomCards from "../components/RoomCards.jsx";
import { PillLink } from "../components/Pill.jsx";
import { slides } from "../data.js";
import { useHeaderObserver, useSite, useSnap } from "../site.jsx";

export default function Home() {
  useSnap(true);
  useHeaderObserver("light");

  return (
    <main>
      <Hero />
      <Story />
      <AboutTeaser />
      <RoomsTeaser />
      <WellnessTeaser />
      <WinterTeaser />
      <SummerTeaser />
    </main>
  );
}

function Hero() {
  const { season, setSeason } = useSite();
  const winter = season === "winter";

  return (
    <section className="hero snap-section" data-header="light">
      <img
        className="hero-photo"
        src={winter ? "/assets/hero-winter.png" : "/assets/hero-summer.png"}
        alt=""
      />
      <div className="hero-shade" />
      <h1>Naturhotel Haller</h1>
      <div className="hero-bar">
        <p>Arrive and feel at home</p>
        <div className="season" role="group" aria-label="Season">
          <button
            type="button"
            className={!winter ? "is-active" : ""}
            onClick={() => setSeason("summer")}
          >
            <img
              className={!winter ? "" : "icon-invert"}
              src="/assets/sun.svg"
              alt=""
              width="16"
              height="16"
            />
            Summer
          </button>
          <button
            type="button"
            className={winter ? "is-active" : ""}
            onClick={() => setSeason("winter")}
          >
            <img
              className={winter ? "icon-dark" : ""}
              src="/assets/snow.svg"
              alt=""
              width="16"
              height="16"
            />
            Winter
          </button>
        </div>
      </div>
    </section>
  );
}

const SLIDE_GAP = 65;
const IDLE_WIDTH = 302;
const ACTIVE_WIDTH = 408;
const IDLE_HEIGHT = 299;
const ACTIVE_HEIGHT = 450;

function Story() {
  const [index, setIndex] = useState(0);
  const windowRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const slideRefs = useRef([]);
  const indexRef = useRef(0);
  const previousRef = useRef(0);
  const slide = slides[index];
  indexRef.current = index;

  function xFor(activeIndex) {
    const left = activeIndex * (IDLE_WIDTH + SLIDE_GAP);
    return windowRef.current.clientWidth / 2 - (left + ACTIVE_WIDTH / 2);
  }

  function place(activeIndex, animate) {
    const frames = slideRefs.current.filter(Boolean);
    const images = frames.map((frame) => frame.querySelector("img"));
    const from = indexRef.current === activeIndex ? previousRef.current : indexRef.current;
    let direction = activeIndex - from;
    if (direction > slides.length / 2) direction -= slides.length;
    if (direction < -slides.length / 2) direction += slides.length;
    direction = Math.sign(direction) || 1;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion = animate && !reduce;
    gsap.killTweensOf([trackRef.current, titleRef.current, copyRef.current, ...frames, ...images]);
    if (!motion) {
      gsap.set(frames, {
        width: (i) => (i === activeIndex ? ACTIVE_WIDTH : IDLE_WIDTH),
        height: (i) => (i === activeIndex ? ACTIVE_HEIGHT : IDLE_HEIGHT),
      });
      gsap.set(images, { scale: 1 });
      gsap.set(trackRef.current, { x: xFor(activeIndex) });
      previousRef.current = activeIndex;
      return;
    }
    const timeline = gsap.timeline({ defaults: { duration: 1.05, ease: "power3.inOut" } });
    timeline.to(trackRef.current, { x: xFor(activeIndex) }, 0);
    timeline.to(
      frames,
      {
        width: (i) => (i === activeIndex ? ACTIVE_WIDTH : IDLE_WIDTH),
        height: (i) => (i === activeIndex ? ACTIVE_HEIGHT : IDLE_HEIGHT),
      },
      0,
    );
    timeline.fromTo(images[activeIndex], { scale: 1.08 }, { scale: 1, ease: "power2.out" }, 0);
    timeline.fromTo(
      titleRef.current,
      { autoAlpha: 0, x: direction * 48 },
      { autoAlpha: 1, x: 0, duration: 0.7, ease: "power2.out" },
      0.18,
    );
    timeline.fromTo(
      copyRef.current,
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
      0.28,
    );
    previousRef.current = activeIndex;
  }

  useLayoutEffect(() => {
    place(0, false);
    function onResize() {
      gsap.set(trackRef.current, { x: xFor(indexRef.current) });
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf([trackRef.current, titleRef.current, copyRef.current, ...slideRefs.current]);
    };
  }, []);

  const skipIntro = useRef(true);
  useLayoutEffect(() => {
    if (skipIntro.current) {
      skipIntro.current = false;
      return;
    }
    place(index, true);
  }, [index]);

  useEffect(() => {
    function onKey(event) {
      const section = document.getElementById("story");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!inView) return;
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % slides.length);
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + slides.length) % slides.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function step(direction) {
    setIndex((value) => (value + direction + slides.length) % slides.length);
  }

  return (
    <section className="story snap-section" id="story" data-header="dark">
      <div className="wave-wrap" aria-hidden="true">
        <img src="/assets/wave.svg" alt="" width="1465" height="536" />
      </div>
      <h2 className="story-title" ref={titleRef}>{slide.title}</h2>
      <div className="story-window" ref={windowRef}>
        <button className="story-arrow story-arrow-left" type="button" aria-label="Previous" onClick={() => step(-1)} />
        <div className="story-track" ref={trackRef}>
          {slides.map((item, itemIndex) => (
            <button
              key={item.title}
              type="button"
              ref={(node) => {
                slideRefs.current[itemIndex] = node;
              }}
              className={`story-slide${itemIndex === index ? " is-active" : ""}`}
              onClick={() => setIndex(itemIndex)}
            >
              <img src={item.image} alt="" />
            </button>
          ))}
        </div>
        <button className="story-arrow story-arrow-right" type="button" aria-label="Next" onClick={() => step(1)} />
      </div>
      <div className="story-foot">
        <div ref={copyRef}>
          <h3>{slide.heading}</h3>
          <p>{slide.text}</p>
        </div>
        <PillLink to={slide.to}>{slide.cta}</PillLink>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="split snap-section" data-header="dark">
      <div className="split-copy">
        <h2 className="display">About Us</h2>
        <h3>A Warm Welcome</h3>
        <p>
          Our Naturhotel Haller in Mareit in the beautiful Ridnaun Valley in the municipality of
          Ratschings is located in the north of Italy near the Dolomites.
        </p>
        <PillLink to="/inquiry">BOOK NOW</PillLink>
      </div>
      <img className="split-photo" src="/assets/reception.png" alt="Reception at Naturhotel Haller" />
    </section>
  );
}

function RoomsTeaser() {
  return (
    <section className="rooms-band snap-section" data-header="dark">
      <div className="rooms-intro">
        <p className="eyebrow">Just find the right one</p>
        <h2>Our room categories</h2>
        <p>here everyone will find their own oasis of well-being</p>
      </div>
      <RoomCards />
    </section>
  );
}

function WellnessTeaser() {
  return (
    <section className="wellness-teaser snap-section" data-header="dark">
      <img src="/assets/wellness-pool.png" alt="Indoor pool in the wooden wellness area" />
      <div className="wellness-copy">
        <h2 className="display">
          Wellness at
          <br />
          our Hotel
        </h2>
        <p className="lead">
          Indoor pool with panoramic views on the fantastic landscapes of the southtirolean mountains
        </p>
        <p>One of the best spots in the hotel is the big pool with an amazing view on the Stubai Alps.</p>
        <PillLink to="/wellness">VIEW MORE</PillLink>
      </div>
      <img className="wellness-accent" src="/assets/sauna-bucket.png" alt="" />
    </section>
  );
}

function WinterTeaser() {
  return (
    <section className="poster snap-section" data-header="light">
      <img src="/assets/winter-village.png" alt="" />
      <div className="poster-shade poster-shade-top" />
      <div className="poster-copy">
        <h2>Embark on Unforgettable Moments in the Snow-Sure Wonderland</h2>
        <PillLink to="/winter" solid>
          VIEW MORE
        </PillLink>
      </div>
    </section>
  );
}

function SummerTeaser() {
  return (
    <section className="poster snap-section" data-header="light">
      <img src="/assets/summer-village.png" alt="Mareit in summer, with the church and castle" />
      <div className="glass-card">
        <h2>A paradise at the foot of 3000 meter high mountains.</h2>
        <PillLink to="/summer" solid>
          VIEW MORE
        </PillLink>
      </div>
    </section>
  );
}
