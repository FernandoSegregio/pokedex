import styled from 'styled-components';
// import { background } from '../../style/cardColorBase';
import arrowBack from '../../images/arrow-back.svg';

export const PokemonDetailsContainerStyle = styled.div`
  background-color: var(--green-100);
  height: 823px;
`;

export const ButtonPokemonSelectStyle = styled.button`
     
    border: none;
    background: transparent;
    cursor: pointer;
    &:nth-child(odd){
      opacity: 0.6;
    }
    &:nth-child(even){
      img{
        height: 400px;
      }
    }
    

    img {
     
      height: 243px;
    }

`;

export const CarouselStyle = styled.div`
  display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
    z-index: 1; 
`;

export const PokemonDetailsStyle = styled.div`
  background-color: var(--white);
  height: 479px;
  position: absolute;
  width: 1440px;
  bottom: 0;
  border-radius: 45px 45px 0 0;  

`;

export const ArrowStyle = styled.button`
  background: url(${arrowBack}) 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 28px;
  height: 24px;
  border: none;
  position: absolute;
  top: 25px;
  left: 35px;
`;