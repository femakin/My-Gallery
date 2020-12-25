import React from "react";

import photo1 from "../Images/photo1.png";
import photo2 from "../Images/photo2.png";
import photo3 from "../Images/photo3.png";
import photo4 from "../Images/photo4.png";
import photo5 from "../Images/photo5.png";
import photo6 from "../Images/photo6.png";
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="gallery">
          <figure className="gallery_item gallery__item--1">
            <img src={photo1} alt="img 1" className="gallery_img" />
          </figure>

          <figure className="gallery_item gallery__item--2">
            <img src={photo2} alt="img 2" className="gallery_img" />
          </figure>

          <figure className="gallery_item gallery__item--3">
            <img src={photo3} alt="img 3" className="gallery_img" />
          </figure>

          <figure className="gallery_item gallery__item--4">
            <img src={photo4} alt="img 4" className="gallery_img" />
          </figure>

          <figure className="gallery_item gallery__item--5">
            <img src={photo5} alt="img 5" className="gallery_img" />
          </figure>

          <figure className="gallery_item gallery__item--6">
            <img src={photo6} alt="img 6" className="gallery_img" />
          </figure>
        </div>
        <footer>
      <a href="https://github.com/femakin/" className="footer_content">
          Femi @
        </a>
        <a href="https://devchallenges.io/" className="footer_content">
          DevChallenges.io
        </a>
      </footer>
      </div>
     
    </div>
  );
}
