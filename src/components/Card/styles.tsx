import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 200px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin-right: 15px;
  margin-bottom: 15px;
  position: relative;

  &:hover {
    top: -2px;
    left: -2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }

  strong {
    text-align: center;
    font-weight: bold;
  }

  span {
    text-align: center;
    font-size: 14px;
    color: #9c9c9c;
  }
`;
