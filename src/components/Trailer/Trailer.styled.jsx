import styled from 'styled-components';

const OpenModal = styled.button`
  display: block;
  width: 100%;
  border: none;
  background-color: #b22222;
  padding: 14px 28px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  transition: all 300ms ease-out;
  color: #fff;
  border: 1px solid white;

  :hover {
    background-color: #fff;
    transform: scale(1.02);
    color: #000;
  }
`;

export { OpenModal };
