import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }
`;
export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;
export const MyLink = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: #000;
    font-weight: 400;
    display: inline-block;
    padding: 2rem;
    background: ${(props) =>
      props.active && "linear-gradient(#fff, transparent)"};
    &:hover {
      background: linear-gradient(#fff, transparent);
    }
  }
`;

export const Button = styled.button`
  background: var(--pink-col);
  color: #fff;
  outline: none;
  border: 0;
  font-size: 1rem;
  padding: 0.7rem 2.2rem;
  cursor: pointer;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 500;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(0.9);
  }
`;
