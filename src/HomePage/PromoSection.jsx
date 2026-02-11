import "./PromoSection.css";
import promo1 from "../assets/promo-9.jpeg";
import promo2 from "../assets/promo-8.jpeg";
import promo3 from "../assets/promo-7.jpeg"


export default function PromoSection() {
  return (
    <section className="collection-section">
      <div className="collection-container">

        {/* CARD 1 */}
        <div className="collection-card">
          <div className="collection-image">
            <img src={promo1} alt="Rooh Collection" />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="collection-card">
          <div className="collection-image">
            <img src={promo2} alt="Guldasta Collection" />
          </div>
        </div>

         {/* CARD 3 */}
        <div className="collection-card">
          <div className="collection-image">
            <img src={promo3} alt="Rooh Collection" />
          </div>
        </div>

      </div>
    </section>
  );
}
