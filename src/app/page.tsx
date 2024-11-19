"use client";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import SocialsLinksScroller from "@/components/SocialsLinksSroller";

export default function Home() {
  return (
    <div className="font-sans ">
      <Header />
      <Banner />
      <SocialsLinksScroller />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}
