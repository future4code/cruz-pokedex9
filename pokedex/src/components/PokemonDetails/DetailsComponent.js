import React from "react";
import {
  CardInfo,
  ContainerCard,
  ImagCard,
  InfoBox,
  Main,
  Title,
} from "./style";
import { theme } from "../../constants/paletteColor";

export default function DetailsComponent({ data }) {
  console.log(data);
  return (
    <Main>
      <InfoBox bg={theme.green}>
        <ImagCard>
          <img src={data.details.photos.front} alt={data.name} />
        </ImagCard>
        <ImagCard>
          <img src={data.details.photos.back} alt={data.name} />
        </ImagCard>
      </InfoBox>
      <InfoBox bg={theme.lightBlue}>
        <Title>Características</Title>

        <ContainerCard>
          {data.details.attributes.map((item) => {
            return (
              <CardInfo>
                <span>{item.name}</span> {item.value}
              </CardInfo>
            );
          })}
        </ContainerCard>
      </InfoBox>
      <InfoBox bg={theme.lightGray}>
        <div>
          <Title>Tipo</Title>
          <ContainerCard>
            {data.details.elements.map((item) => {
              return (
                <CardInfo>
                  <span>{item}</span>
                </CardInfo>
              );
            })}
          </ContainerCard>
        </div>

        <div>
          <Title>Principais ataques</Title>

          <ContainerCard ht="100%">
            {data.details.attack.map((item) => {
              return (
                <CardInfo>
                  <span>{item}</span>
                </CardInfo>
              );
            })}
          </ContainerCard>
        </div>
      </InfoBox>
    </Main>
  );
}
