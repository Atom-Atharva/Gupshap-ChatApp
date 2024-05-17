import React from "react";
import Header from "../../component/home/header/Header.js";
import Hero from "../../component/home/hero/Hero.js";
import Features from "../../component/home/features/Features.js";
import About from "../../component/home/about/About.js";
import ContactMe from "../../component/home/contact-me/ContactMe.js";
import Footer from "../../component/home/footer/Footer.js";

const Homepage = () => {
    return (
        <div className="px-20">
            <Header />
            <Hero />
            <Features />
            <About />
            <ContactMe />
            <Footer />
        </div>
    );
};

export default Homepage;
