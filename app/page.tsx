import Link from "next/link";
import Coorperation from "../components/Cooperation";
import Jumbotron from "../components/Jumbotron";
import stripe from "public/images/stripe.png";
import About from "../components/About";
import { Suspense } from "react";
import Service from "../components/Service";
import ListOffer from "../components/ListOffer";
import GridService from "../components/GridService";

const Home = () => {
  return (
    <article>
      <div>
        <Jumbotron />
      </div>
      <div className="h-fit px-20 flex justify-between ">
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
        <Coorperation imgs={stripe} />
      </div>
      <section className="pt-20 px-20 mb-30">
        <About />
      </section>
      <section className="pt-20 px-20 mb-30">
        <Service
          btnText="More Project"
          urlText="#"
          title="Service"
          subTitle="Provide the best offer according to your needs"
          desc="We can adjust your needs so that your business can grow and you can run other business"
        />
        <div className="mt-20 flex flex-col gap-y-[60px]">
          <ListOffer />
          <ListOffer />
          <ListOffer />
          <ListOffer />
        </div>
      </section>
      <section className="pt-20 px-20 mb-30">
        <Service
          btnText="More Project"
          urlText="#"
          title="Service"
          subTitle="Some of the projects we have done well"
          desc="We can adjust your needs so that your business can grow and you can run other business"
        />
        <GridService />
      </section>
    </article>
  );
};

export default Home;
