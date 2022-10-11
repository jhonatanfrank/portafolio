import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    href: "https://rick-and-morty-jhonatanfrank.vercel.app/",
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",    
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    href: "https://rick-and-morty-jhonatanfrank.vercel.app/",
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    href: "https://rick-and-morty-jhonatanfrank.vercel.app/",
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
  <a target="_blank" href={slide.href}>
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </a>
  </div>
));

export default slides;
