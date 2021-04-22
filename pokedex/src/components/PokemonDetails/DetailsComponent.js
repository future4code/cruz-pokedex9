import React from 'react'
import { ImagCard, InfoBox, Main } from './style'
import {theme} from '../../constants/paletteColor'


export default function DetailsComponent({data}) {
// const {photos} = data.details

    return (
        <Main>
            <InfoBox bg={theme.lightBlue}>
                <ImagCard>
                    <img src={data.details.photos.front} alt={data.name}/>
                </ImagCard>
                <ImagCard>
                    <img src={data.details.photos.back} alt={data.name}/>
                </ImagCard>
            </InfoBox>
            <InfoBox>
                
            </InfoBox>
            <InfoBox>
                
            </InfoBox>
        </Main>
    )
}
