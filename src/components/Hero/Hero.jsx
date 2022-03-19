import {
  Ellipse,
  HeroBox,
  Banner,
  OfferBox,
  Offer,
  HeroBottom,
} from "./Hero.styled";
import Nav from "../Nav/Nav";
import SocialIcon from "../SocialIcon/SocialIcon";
const Hero = () => {
  return (
    <HeroBox>
      <Nav />
      <Ellipse src="./src/assets/Ellipse.png" />
      <Banner>
        <div>
          <img src="./src/assets/img2.png" alt="" />
          <img src="./src/assets/img1.png" alt="" />
        </div>
        <div>
          <p>NEW ARRIVALS</p>
          <h1>JUST</h1>
          <h1>FOR</h1>
          <h2>YOU</h2>

          <OfferBox>
            <Offer>
              <h3>FOR ONLINE</h3>
              <h6>ORDER</h6>
            </Offer>
            <Offer pink>
              <h3>30% OFF</h3>
            </Offer>
          </OfferBox>
        </div>
      </Banner>
      <HeroBottom>
        <small>
          <box-icon name="copyright" color="var(--pink-col)"></box-icon>
          Fashionista’s online store 2021. All rights reserved.
        </small>
        <SocialIcon></SocialIcon>
      </HeroBottom>
    </HeroBox>
  );
};

export default Hero;
