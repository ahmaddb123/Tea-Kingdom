import AboutUs from "./components/AboutUs/AboutUs";
import Testimonials from "./components/Testimonials/page";
import "./page.css";
export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container  mx-auto flex justify-center items-center flex-col p-0">
          {/* CONTAINER TITLE */}
          <div className="container-title">
            <h1 className="moving-title font-bold">KINGDOM OF TEA</h1>
          </div>
          {/* CONTAINER DESCRIPTION */}
          <div className="desc">
            <h1>Tea: A Drink of Tradition and Serenity</h1>
            <p className="p-desc">
              Tea is not just a beverage; its an experience that blends
              heritage and tranquility. Throughout the ages, tea has held a
              special place in many cultures, symbolizing hospitality,
              reflection, and relaxation. Whether you prefer refreshing green
              tea, robust black tea, or calming herbal blends, each type of tea
              offers unique characteristics and benefits. Enjoy your favorite
              cup of tea and immerse yourself in moments of peace.
            </p>
          </div>
        </div>
      </div>
      <AboutUs />
      <Testimonials/>
    </>
  );
}
