import Link from "next/link";
import Coorperation from "../components/Cooperation";
import Jumbotron from "../components/Jumbotron";
import stripe from "public/images/stripe.png";
import About from "../components/About";
import { Suspense } from "react";
import Service from "../components/Service";
import ListOffer from "../components/ListOffer";
import GridService from "../components/GridService";
import Review from "../components/Review";

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
      <section className="pt-20 px-20 mb-30 sm:bg-red-900">
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
          desc="boba is an agency with 10+ years of experience that has helped more than 300+ projects from small to large projects"
        />
        <GridService />
      </section>
      <div>
        <Review />
      </div>
    </article>
  );
};

export default Home;
