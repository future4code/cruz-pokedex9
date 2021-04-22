import styled from 'styled-components'
import {theme} from '../../constants/paletteColor'

export const Main = styled.div`
    background-color: rgba(71, 186, 231, 0.60);
    height: 35vh;
    width: 15vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 5px ${theme.gray};
    border-radius: 10px;

`
export const PokemonImg = styled.img`
    width: 70%;
`

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    height: 20%;

`
export const PokemonName = styled.h1`
    font-size:1.1em;
    color: ${theme.purple};
    letter-spacing: 2px;
`
export const CardButton = styled.button`
    padding: 5px;
    background-color: ${theme.blue};
    flex:1;
    color: white;
    font-weight:bold;
    letter-spacing:1px;
    height: 100%;
    border-bottom: none;
    border-color: #A4B0BE;
    cursor: pointer;
    :first-child{
        border-bottom-left-radius: 10px; 
        border-left: none;
    }
    :last-child{
        border-bottom-right-radius: 10px;
        border-right:none;
    }
`

