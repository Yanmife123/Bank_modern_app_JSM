import { useState } from "react";
import style from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX}  ${style.flexCenter} `}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary  ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${style.paddingX}  ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients />
          <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
