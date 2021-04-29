import styled from "styled-components";
import { theme } from "../../constants/paletteColor";

export const Main = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-evenly;
`;
export const InfoBox = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.bg || ""};
  border-radius: 10px;
  box-shadow: 2px 2px 8px ${theme.gray};
`;
export const ImagCard = styled.div`
  height: 50%;
  width: 80%;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

export const ContainerCard = styled.div`
  /* margin: auto 0; */
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  height: ${(props) => props.ht || "60%"};
  flex-wrap: wrap;
`;

export const CardInfo = styled.div`
  width: 45%;
  height: 80px;
  padding: 14px 10px;
  border-radius: 10px;
  background-color: ${theme.yellow};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 1.2em;
  box-shadow: 2px 2px 8px ${theme.gray};

  span {
    letter-spacing: 2px;
    font-weight: bold;
    color: ${theme.purple};
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  color: ${theme.purple};
  letter-spacing: 2px;
`;
