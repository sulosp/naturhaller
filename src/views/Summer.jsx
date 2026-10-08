"use client";

import { asset } from "../asset.js";

import { PillLink } from "../components/Pill.jsx";
import { useHeaderObserver, useSnap } from "../site.jsx";

export default function Summer() {
  useSnap(true);
  useHeaderObserver("light");

  return (
    <main>
      <section className="feature feature-photo-left snap-section" data-header="light">
        <img src={asset("/assets/hike-side.png")} alt="Summer landscape beside the hotel" />
        <div>
          <img className="inline-photo" src={asset("/assets/hike-top.png")} alt="Hiking above the valley" />
          <p>
            Around the hotel there are a variety of tours. Beginners and advanced hikers can find more
            then enough tours to fill weeks full of nice experiences.What is your next project?
          </p>
          <p>Ask for imformation at the reception, we will be happy to help you with the selection.</p>
          <a className="pill" href="#impressions">
            MORE INFORMATION
          </a>
        </div>
      </section>

      <section className="impressions snap-section" id="impressions" data-header="dark">
        <div className="impressions-split">
          <div>
            <h1>Some impressions from the summer</h1>
            <a className="pill" href="#cycling">
              MORE INFORMATION
            </a>
          </div>
          <div>
            <p className="lead">In the immediate vicinity there are a variety of hiking trails.</p>
            <p>
              Whether circular hiking trail or hiking trails to huts and restaurants. Everyone will find
              something. There is also something for every fitness level. Just ask at our reception for
              your next tour. We are happy to help.
            </p>
          </div>
        </div>
        <div className="mosaic">
          <img src={asset("/assets/slide-1.png")} alt="" />
          <img src={asset("/assets/summer-village.png")} alt="" />
          <img src={asset("/assets/gallery-1.png")} alt="" />
          <img src={asset("/assets/hike-top.png")} alt="" />
        </div>
      </section>

      <section className="wide-story snap-section" id="cycling" data-header="dark">
        <img src={asset("/assets/summer-village.png")} alt="The valley in summer" />
        <div className="wide-story-copy">
          <h2>Cycling and e-biking are becoming more and more popular.</h2>
          <div>
            <p>
              Try out and test our bikes and e-bikes in the mountains. Whether a short trip to Sterzing or
              by bike to Merano, here is the right tour for everyone in South Tyrol.
            </p>
            <a className="pill" href="#sights">
              MORE INFORMATION
            </a>
          </div>
        </div>
      </section>

      <section className="sights snap-section" id="sights" data-header="dark">
        <article>
          <img src={asset("/assets/gallery-3.png")} alt="" />
          <div>
            <h2 className="display tight">Something about everything</h2>
            <p>
              The whole region offers a variety of sights, from the many magnificent churches, the
              Gilfenklamm, to the Wolfsthurn Castle in Mareit, which is one of the most beautiful castles
              in Tyrol.
            </p>
            <PillLink to="/inquiry">BOOK NOW</PillLink>
          </div>
        </article>
        <article className="reverse">
          <div>
            <h2>A motorcyclists paradise</h2>
            <p>
              On our doorstep are two of the most beautiful pass roads in the Alps, with many bends and
              great views. The Penser Joch and the Jaufen Pass are ideal for a day trip to Bozen or Meran.
              You can also start beautiful motorcycle tours in the Dolomites or the Val Pusteria from the
              hotel. Try it out, you won't be disappointed.
            </p>
            <PillLink to="/inquiry">INQUIRY</PillLink>
          </div>
          <img src={asset("/assets/hero-summer.png")} alt="" />
        </article>
      </section>
    </main>
  );
}
