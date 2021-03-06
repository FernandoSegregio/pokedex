import styled from 'styled-components';
import iconSearch from '../../images/search-bar.svg';

export const SearchBarStyle = styled.input`
    background: #2158B7 0% 0% no-repeat padding-box;
    background-image: url(${iconSearch});
    background-position: 50%;
    border-radius: 35px;
    box-shadow: 0px 3px 6px #00000029;
    color: transparent;
    display: flex;
    height: 70px;
    right: 2.5%;
    opacity: 1;
    position: fixed;
    text-align: left;
    top: 80%;
    width: 70px;
    z-index: 3;
    &::placeholder {
         color: transparent;
    }
    cursor: pointer;
    &:focus{ 
        background-position: 95%;
        color: var(--white);
        font-family: var(--unnamed-font-family-montserrat);
        font-size: var(--unnamed-font-size-16);
        font-style: var(--unnamed-font-style-normal) normal; 
        font-weight: var(--unnamed-font-weight-normal); 
        letter-spacing: var(--unnamed-character-spacing-0);
        line-height: var(--unnamed-line-spacing-19);
        padding-left: 37px;
        text-align: left;
        width: 30%;
        &::placeholder {
            color: var(--white);
            font-family: var(--unnamed-font-family-montserrat);
            font-size: var(--unnamed-font-size-16);
            font-style: var(--unnamed-font-style-normal) normal; 
            font-weight: var(--unnamed-font-weight-normal); 
            letter-spacing: var(--unnamed-character-spacing-0);
            line-height: var(--unnamed-line-spacing-19);
            text-align: left;
            filter: brightness(0.75);
        }
    }
    @media (max-width: 600px){
        height: 60px;
        top: 200px;
        width: 60px;
        &:focus{
            width: 95%;
        }
    }

`;


