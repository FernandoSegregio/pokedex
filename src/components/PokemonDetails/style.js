import styled from 'styled-components';
import { background, details } from '../../style/cardColorBase';
import arrowBack from '../../images/arrow-back.svg';

export const PokemonDetailsContainerStyle = styled.div`
  background-color: ${({defaultValue}) => background[defaultValue]};
  height: 823px;
`;

export const ButtonPokemonSelectStyle = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    &:nth-child(odd){
      opacity: 0.5;
      position: relative;
      top: -26px;
    }
    &:nth-child(even){
      img{
        height: 330px;
      }
    }
    
    img {
      height: 210px;
    }

    @media (max-width: 600px){
      
      &:nth-child(odd){
      opacity: 0.4;
      position: relative;
      top: -20px;
      margin: -40px;
      
    }
    &:nth-child(even){
      img{
        height: 240px;
        position: relative;
        top: 20px;
      }
    }
    img {
      height: 140px;
    }
    
    }


`;

export const CarouselStyle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 100px;
  z-index: 2; 
  
    @media (max-width: 600px){
      
     top: 220px; 
    
    }
`;

export const PokemonDetailsStyle = styled.div`
  background-color: var(--white);
  height: 479px;
  position: absolute;
  width: 1440px;
  bottom: 0;
  border-radius: 45px 45px 0 0;  
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px){
      width: 428px;
      height: 425px;
    }

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

  @media (max-width: 600px){
      width: 27px;
      height: 23px;
    }
`;

export const TypesStyle = styled.div`
  display: flex;
  column-gap: 7px;
`;

export const TypeStyle = styled.span`
  background-color: ${({defaultValue}) => details[defaultValue]};
  border-radius: 12px;
  color: var(--white);
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-12);
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-normal);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-15);
  opacity: 1;
  padding: 3px 14px;
  text-align: left;
`;

export const NameStyle = styled.span`
  color: var(--white);
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-33);
  font-style:var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-bold); 
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-40); 
  opacity: 1;
  @media (max-width: 600px){
     

    }
`;
export const ImgBackGroundCardStyle = styled.img`
  height: 281px;
  left: 588px;
  position: absolute;
  top: 173px;
  width: 277px;
  z-index: 1;

  @media (max-width: 600px){
    height: 276px;
    left: 64px;
    position: absolute;
    top: 229px;
    width: 280px;
    }
  
`;

export const NameDatailsPokemonStyle = styled.div`
  position: absolute;
  top: 68px;
  left: 636px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 6px;
  
  @media (max-width: 600px){
    left: 134px;
    top: 120px;
    row-gap: 2px
    };
`;

export const DetailStyle = styled.p`
  color: var(--black-200);
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-16);
  font-style:var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-600);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-30); 
  opacity: 1;
`;


export const AbilitiesDetailsStyle = styled.div`
  align-items: center;
  display: flex;
  column-gap: 6px;
`;

export const DetailsStyle = styled.div`
  align-items: flex-start;
  column-gap: 59px;
  display: flex;
  position: absolute;
  row-gap: 10px;
  top: 156px;
`;

export const DetailTitle = styled.p`
  color: var(--black-200);
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-16);
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-normal);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-30); 
  opacity: 1;
`;


export const BreedingStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerBreedingStyle = styled.div`
  position: absolute;
  top: 180px;
  display: flex;
`;

export const GenderStyle = styled.div`
  display: flex;
  position: absolute;
  left: 100px;
  
  img {
  transform: rotate(-45deg);
  height: 24px;
  margin-left: 20px;
  }
`;

export const EggStyle = styled.div`
  position: absolute;
  left: 120px;
  top: 32px;
`;

export const IdStyle = styled.p`
  color: ${({defaultValue}) => details[defaultValue]};
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-600);
  font-size: var(--unnamed-font-size-18);
  font-family: var(--unnamed-font-family-montserrat);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-22);
  opacity: 1;
  position: absolute;
  right: 30px;
  text-align: right;
  top: 14px;
`;

export const TitleBreegingStyle = styled.h3`
  position: absolute;
  top: -30px;
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-18);
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-600);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-30); 
`;


