import React, { useRef, useEffect } from "react";
import "./App.scss";
import People from "./images/main.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  return (
    <section className="main">
      <h2 className="effect">This is image reveal effect</h2>
      <div ref={(el) => (container = el)} className="container">
        <>
          <div className="img-container">
            <img ref={(el) => (image = el)} src={People} alt="test" />
          </div>
        </>
      </div>
    </section>
  );
};

export default App;
