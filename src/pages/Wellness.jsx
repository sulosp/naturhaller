import { PillLink } from "../components/Pill.jsx";
import { useHeaderObserver, useSnap } from "../site.jsx";

export default function Wellness() {
  useSnap(true);
  useHeaderObserver("light");

  return (
    <main>
      <section className="poster snap-section wellness-pool" id="pool" data-header="light">
        <img src="/assets/pool-full.png" alt="Indoor pool with a view of the mountains" />
        <div className="glass-card glass-right">
          <p className="lead">
            With every breath you take you can feel the ease of activity while the water surrounds you.
            Charge up your batteries while enjoying the magnificent mountain views and a sunset in our
            swimming pool.
          </p>
          <p>One of the best spots in the hotel is the big pool with an amazing view on the Stubai Alps.</p>
          <a className="pill pill-light" href="#sauna">
            SAUNA
          </a>
        </div>
      </section>

      <section className="feature snap-section" id="sauna" data-header="dark">
        <img src="/assets/sauna.png" alt="Finnish sauna" />
        <div>
          <h1 className="display">Sauna</h1>
          <p>
            In our wellness area you will find a Finnish sauna, a steam bath, an experience shower, a
            whirlpool for 6 persons (36°), a Kneipp pool, and a separated relax area.
          </p>
          <p>At the tea corner you can refresh yourself with water, juice or a good tea on the house.</p>
          <a className="pill" href="#whirlpool">
            WHIRLPOOL
          </a>
        </div>
      </section>

      <section className="feature feature-flip snap-section" id="whirlpool" data-header="dark">
        <img src="/assets/whirlpool.png" alt="Whirlpool" />
        <div>
          <h2 className="display">Whirlpool for 6 people</h2>
          <p>
            Our whirlpool, with a water temperature of 36°C, invites you to relax, whether it's after
            hiking, skiing, sledding, or a shopping spree... It's definitely pure rejuvenation for body
            and mind.
          </p>
          <a className="pill" href="#massage">
            AND MORE
          </a>
        </div>
        <img className="feature-extra" src="/assets/whirlpool-detail.png" alt="" />
      </section>

      <section className="feature snap-section" id="massage" data-header="dark">
        <img src="/assets/gallery-2.png" alt="" />
        <div>
          <h2 className="display">Indulge yourself, you deserve it!</h2>
          <p>
            Are you craving for a tender massage for your body and soul? Treat yourself to an exquisitely
            tranquilizing experience. Whether you desire a thorough full-body massage or crave extra care
            for your back or feet, we offer tailored experiences to suit your needs. Our holistic
            treatments will recharge your vitality, granting you the vigor required to conquer each day. At
            Sonja's in our Nature Hotel, you'll find yourself metaphorically cradled in the hands of
            perfection.
          </p>
          <PillLink to="/inquiry">BOOK NOW</PillLink>
        </div>
      </section>

      <section className="book-band snap-section" data-header="dark">
        <h2 className="display center">Book Now</h2>
        <p className="center-note">Indulge yourself, you deserve it!</p>
        <PillLink to="/inquiry">INQUIRE</PillLink>
        <div className="filmstrip">
          <img src="/assets/wellness-pool.png" alt="" />
          <img src="/assets/sauna-bucket.png" alt="" />
          <img src="/assets/whirlpool-detail.png" alt="" />
          <img src="/assets/gallery-3.png" alt="" />
        </div>
      </section>
    </main>
  );
}
