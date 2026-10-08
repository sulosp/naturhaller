"use client";

import { asset } from "../asset.js";

import { PillLink } from "../components/Pill.jsx";
import { useHeaderObserver, useSnap } from "../site.jsx";

export default function Winter() {
  useSnap(true);
  useHeaderObserver("light");

  return (
    <main>
      <section className="feature feature-photo-left snap-section" data-header="light">
        <img src={asset("/assets/ski.png")} alt="Ski slopes near the hotel" />
        <div>
          <h1 className="display">Four Ski resorts just around the corner</h1>
          <p>Embark on Unforgettable Moments in the Snow-Sure Wonderland of Ratschings/Jaufen.</p>
          <p>
            Prepare to be whisked away on a journey in the snow-kissed paradise of Ratschings/Jaufen.
            Immerse yourself in a world where modern, cutting-edge lifts effortlessly transport you to
            breathtaking heights, revealing a majestic panorama that will forever etch itself in your
            memory. As this would not be enough by itself , you can also choose from a great variety of
            culinary delights. Here everyone can have its way.
          </p>
          <a className="pill" href="#trails">
            HIKING TRAILS
          </a>
        </div>
      </section>

      <section className="feature feature-flip snap-section" id="trails" data-header="dark">
        <img src={asset("/assets/winter-hike.png")} alt="Winter hiking trail" />
        <div>
          <h2>In the immediate vicinity there are a variety of winter hiking trails.</h2>
          <p>
            Whether for a walk or an extensive hike through the winter landscapes of the Wipp Valley. In
            the valley there are marked hiking trails of all levels of difficulty. Everyone will find
            something here. You will find hikes to various huts in the ski areas and huts which are amidst
            untouched nature.
          </p>
          <p className="lead">
            Once there, South Tyrolean delicacies, refreshing drinks and great views over fascinating
            mountain landscapes await you.
          </p>
          <a className="pill" href="#wonderland">
            WINTER WONDERLAND
          </a>
        </div>
      </section>

      <section className="impressions snap-section" id="wonderland" data-header="dark">
        <div className="impressions-head">
          <h2>Glimpses of the enchanting winter wonderland that awaits you at our destination</h2>
          <a className="pill" href="#toboggan">
            TOBOGGANING
          </a>
        </div>
        <div className="mosaic">
          <img src={asset("/assets/slide-5.png")} alt="" />
          <img src={asset("/assets/winter-village.png")} alt="" />
          <img src={asset("/assets/hero-winter.png")} alt="" />
          <img src={asset("/assets/ski.png")} alt="" />
        </div>
      </section>

      <section className="wide-story snap-section" id="toboggan" data-header="dark">
        <img src={asset("/assets/winter-village.png")} alt="Snow-covered village" />
        <div className="wide-story-copy">
          <h2>Near the hotel there are many opportunities for tobogganing</h2>
          <div>
            <p>
              Whether beginner or advanced, with us there are plenty of opportunities for your sleigh ride.
              There are toboggan runs to alpine pastures which are only accessible on foot as well as
              toboggan runs at the ski resorts where you can easily reach the starting point with the ski
              lift.
            </p>
            <PillLink to="/inquiry">MORE INFORMATION</PillLink>
          </div>
        </div>
      </section>

      <section className="two-notes snap-section" data-header="dark">
        <article>
          <img src={asset("/assets/slide-6.png")} alt="" />
          <h2>The sport of ski touring is also becoming more and more popular. Many tours are waiting for you!</h2>
          <p>
            Whether beginner or advanced. In the Wipptal there are many ski tours of different lengths and
            levels of difficulty.
          </p>
          <PillLink to="/inquiry">MORE INFORMATION</PillLink>
        </article>
        <article>
          <h2>A true cross-country skiing paradise awaits you near the hotel</h2>
          <p>
            Whether beginner or advanced. In the Wipptal there are many ski tours of different lengths and
            levels of difficulty.
          </p>
          <PillLink to="/inquiry">MORE INFORMATION</PillLink>
          <img src={asset("/assets/gallery-4.png")} alt="" />
        </article>
      </section>
    </main>
  );
}
