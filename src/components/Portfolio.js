import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Порфтолио & Кейсы</h3>
              </div>
              <div className="subtitle">
                <p>
                  Fusce sollicitudin eros id ex maximus gravida non vitae ante.
                  Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                <li className="grid-sizer" />
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Youtube</span>
                      <h3 className="title">Drawing Art</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link popup-youtube"
                      href="//www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Vimeo</span>
                      <h3 className="title">Lafayette Fly</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link popup-vimeo"
                      href="//player.vimeo.com/video/337293658?autoplay=1"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Soundcloud</span>
                      <h3 className="title">Emotional Music</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Popup</span>
                      <h3 className="title">Deo Sumbara</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link zoom"
                      href="img/portfolio/4.jpg"
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Details</span>
                      <h3 className="title">Product Design</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link portfolio_popup c-pointer"
                      onClick={() => setActiveDetailsPopup(true)}
                    />
                  </div>
                </li>
                <li className="grid-item">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Popup</span>
                      <h3 className="title">Mockup Shape</h3>
                      <img className="svg" src="img/svg/vector5.svg" alt="" />
                    </div>
                    <a
                      className="tonni_tm_full_link zoom"
                      href="img/portfolio/6.jpg"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
