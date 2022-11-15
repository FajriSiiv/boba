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
import webD from "public/images/web-contoh.jpg";
import sosmedImg from "public/images/sosmed-img.jpg";
import brandingImg from "public/images/branding-img.jpg";
import digitalImg from "public/images/marketing-img.png";

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
          <ListOffer
            title="UIUX Design"
            no="01"
            desc="We have several offer related to UIUX Design, such as Website Design, Mobile App Design, Prototyping, Wireframe, and also Development."
            images={webD}
          />
          <ListOffer
            title="Branding"
            no="02"
            desc="Make your business more attractive  by building brand awareness. We have several services such as logo design, brand identify, packaging, and also everything related to brand"
            images={brandingImg}
          />
          <ListOffer
            title="Social Media"
            no="03"
            desc="Make your social media more active in order to increase trust in your brand, we have several services such as Instagram, Linkedin, Twitter, and all your social media needs."
            images={sosmedImg}
          />
          <ListOffer
            title="Digital Marketing"
            no="04"
            desc="If you already have a good design, we also need marketing so that our brand is known by many people. This also aims to improve our business"
            images={digitalImg}
          />
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
