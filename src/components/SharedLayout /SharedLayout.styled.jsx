import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  background-color: #b22222;
`;

const Header = styled.header`
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  min-height: 60px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const Link = styled(NavLink)`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  transition: 300ms;

  &.active {
    color: #ff0000;
  }
  :not(:last-child) {
    margin-right: 30px;
  }
  :hover {
    color: #ff0000;
  }
`;

export { Container, Header, Nav, Link };
