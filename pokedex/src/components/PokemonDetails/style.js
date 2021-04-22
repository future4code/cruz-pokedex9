import styled from 'styled-components'
import {theme} from '../../constants/paletteColor'

export const Main = styled.div`
    height:80vh;
    width: 100vw;
    display:flex;
    margin-top: 25px;
    align-items: center;
    justify-content:space-evenly;
`
export const InfoBox = styled.div`
    height: 100%;
    width: 25%; 
    display:flex;
    flex-direction:column;
    background-color: ${(props) => props.bg || ""};
    border-radius: 10px;
    box-shadow: 2px 2px 8px ${theme.gray};
`
export const ImagCard = styled.div`
    height: 50%;
    width: 80%;
    margin: 0 auto;
    img {
        width:100%;
    }
`
