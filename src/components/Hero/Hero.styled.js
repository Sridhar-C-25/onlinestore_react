import styled from "styled-components";

export const HeroBox = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--bg-col);
  padding: 0 4%;
  position: relative;
  z-index: 10;
`;
export const Ellipse = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 150px;
`;
export const Banner = styled.div`
  display: flex;
  padding-top: 2rem;
  gap: 5.4rem;

  img:nth-child(1) {
    height: 425px;
    margin-right: 1.3rem;
  }
  img:nth-child(2) {
    height: 355px;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: -2rem;
    font-weight: 700;
  }
  p {
    color: var(--pink-col);
    margin-left: 1rem;
    letter-spacing: 0.1rem;
  }
  h2 {
    font-family: "Aladin";
    color: var(--pink-col);
    font-size: 3.1rem;
    margin: 0.5rem 9rem;
  }
`;
export const OfferBox = styled.div`
  display: flex;
  color: #fff;
  width: 310px;
  padding-top: 4rem;
`;
export const Offer = styled.div`
  padding: 0.6em;
  background: ${(props) => (props.pink ? "var(--pink-col)" : "#000")};
  flex: ${(props) => (!props.pink ? 3 : 1)};
  text-align: center;
  h6 {
    font-weight: 400;
  }
`;
export const HeroBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  small {
    display: flex;
    align-items: center;
    color: #444;
  }
`;
