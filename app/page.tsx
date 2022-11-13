import Link from "next/link";
import Coorperation from "../components/Cooperation";
import Jumbotron from "../components/Jumbotron";
import stripe from "public/images/stripe.png";
import About from "../components/About";

const Home = () => {
  return (
    <article>
      <Jumbotron />
      <div className="h-fit px-20 flex justify-between ">
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
      </div>
      <section className="pt-20 px-20 mb-20">
        <About />
      </section>
    </article>
  );
};

export default Home;
