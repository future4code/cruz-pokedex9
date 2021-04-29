import styled from 'styled-components'
import { theme } from '../../constants/paletteColor'

export const Main = styled.header`
    width: 100%;
    padding: 20px 40px;

    background-color: ${theme.green};

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1`
    color: ${theme.purple};
    letter-spacing: 2px;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
`

export const NavItem = styled.button`
    background-color: ${theme.blue};
    color: #fff;
    font-size: 1.4em;
    padding: 14px;
    font-weight: bold;
    text-transform: lowercase;
    letter-spacing: 4px;
    border: none;
    transition: all .4s;
    cursor: pointer;
    margin: 0 6px;
    border-radius: 6px;

    :active { 
        transform: scale(0.92);  
    }
`