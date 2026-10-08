import { PillLink } from "../components/Pill.jsx";
import { philosophy } from "../data.js";
import { useHeaderObserver, useSnap } from "../site.jsx";

const gallery = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
];

export default function About() {
  useSnap(true);
  useHeaderObserver("light");

  return (
    <main>
      <section className="philosophy snap-section" data-header="light">
        <img src="/assets/philosophy.png" alt="" />
        <div className="philosophy-shade" />
        <div className="philosophy-inner">
          <p className="eyebrow light">Philosophy</p>
          <h1 className="display light center">This is what important to us</h1>
          <div className="philosophy-grid">
            {philosophy.map((item, index) => (
              <article id={item.id} key={item.title} className={index % 2 ? "drop" : "lift"}>
                <header>
                  <img src={item.icon} alt="" width="24" height="24" />
                  <h2>{item.title}</h2>
                </header>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-band snap-section" data-header="dark">
        <p className="eyebrow">The Nature Hotel</p>
        <h2>Here are a few peaks into our hotel</h2>
        <div className="gallery-grid">
          {gallery.map((src, index) => (
            <figure key={src} className={index % 2 ? "drop" : "lift"}>
              <img src={src} alt="" />
            </figure>
          ))}
        </div>
        <PillLink to="/inquiry">BOOK NOW</PillLink>
      </section>

      <section className="children snap-section" data-header="dark">
        <img src="/assets/children.png" alt="" />
        <div className="children-copy">
          <div>
            <p className="eyebrow">Children are welcome</p>
            <h2>At our hotel children are warmely welcomed</h2>
          </div>
          <div>
            <p>
              Even the smallest ones are well cared for, so that the whole family takes good memories
              back home.
            </p>
            <p>The hotel has a children's playroom, various games and books to borrow.</p>
            <p>
              We have a large garden, which invites you to romp especially in summer. There is also a
              trampoline and a swing. We are happy to provide high chairs or cots.
            </p>
            <PillLink to="/inquiry">BOOK NOW</PillLink>
          </div>
        </div>
      </section>

      <section className="reviews snap-section" data-header="dark">
        <p>Our guests enjoy their stay with us, this makes us happy!</p>
        <h2 className="display center">Reviews for our Nature Hotel in South Tyrol</h2>
        <blockquote>
          <span className="avatar" aria-hidden="true" />
          <p className="quote">“Verry nice place with athmosphere”</p>
          <p>
            We do live in a busy time and especially now we believe that is important to to get back
            to the roots of our culture and connect in a deeper way. In the middle of the beautiful
            nature which surrounds us we would like to connect and would love you to be part of it.
            Only when we feel good about ourselves, we can pass it on to our guests and only when our
            guests are satisfied, we are satisfied.
          </p>
        </blockquote>
        <div className="dots" aria-hidden="true">
          <i className="is-on" />
          <i />
          <i />
          <i />
        </div>
      </section>
    </main>
  );
}
