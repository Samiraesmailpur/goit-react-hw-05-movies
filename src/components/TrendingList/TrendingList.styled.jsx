import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  transition: 1s;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;

  :hover {
    transform: scale(1.05);
  }
  width: 300px;

  a {
    background-color: #000;
  }

  img {
    display: block;
  }
`;

const Names = styled.p`
  text-align: center;
  color: #fff;
  padding: 15px;
`;

export { Item, Names };
