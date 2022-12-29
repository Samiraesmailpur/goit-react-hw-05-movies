import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BackLink = styled(Link)`
  color: #000;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100px;
`;

const Title = styled.h2`
  font-size: 25px;
`;

const Subtitle = styled.p`
  font-size: 20px;
`;

const MovieContainer = styled.div`
  display: flex;
`;

const About = styled.div`
  color: #fff;
  margin-left: 30px;
`;

const LinkItem = styled(NavLink)`
  color: #fff;
  border: 1px solid white;
  padding: 6px 12px;
  border-radius: 14px;
  display: block;
  max-width: 60px;
  width: 100%;
  text-align: center;
  transition: 300ms;

  :hover {
    background-color: #fff;
    color: #000;
  }

  &.active {
    background-color: #fff;
    color: #000;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

const Item = styled.li`
  margin: 20px;
`;
export {
  BackLink,
  MovieContainer,
  About,
  Title,
  Subtitle,
  LinkItem,
  List,
  Item,
};
