import styled from 'styled-components';
import { background, details } from '../../style/cardColorBase';

export const PokedexStyle = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 100px;
  place-items: center;
  margin-top: 38px;
`;

export const CardStyle = styled.div`
  background-color: ${({defaultValue}) => background[defaultValue]};
  border-radius: 13px;
  box-shadow: 0px 3px 6px #00000029;
  text-transform: capitalize;
  display: flex;
  height: 221px;
  opacity: 1;
  position: relative;
  width: 295px;
`;

export const NameStyle = styled.span`
  color: var(--white);
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-bold); 
  font-size: var(--unnamed-font-size-25);
  font-family: var(--unnamed-font-family-montserrat);
  left: 16px;
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-30); 
  opacity: 1;
  position: absolute;
  text-align: left;
  top: 28px;
`;

export const TypesStyle = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 16px;
  position: absolute;
  row-gap: 4px;
  top: 69px;
`;

export const TypeStyle = styled.span`
  background-color: ${({defaultValue}) => details[defaultValue]};
  color: var(--white);
  border-radius: 12px;
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-15);
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-normal);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-19);
  opacity: 1;
  padding: 3px 14px;
  text-align: left;
`;

export const IdStyle = styled.p`
  color: ${({defaultValue}) => details[defaultValue]};
  font-style: var(--unnamed-font-style-normal) normal;
  font-weight: var(--unnamed-font-weight-600);
  font-size: var(--unnamed-font-size-16);
  font-family: var(--unnamed-font-family-montserrat);
  letter-spacing: var(--unnamed-character-spacing-0);
  line-height: var(--unnamed-line-spacing-19);
  opacity: 1;
  position: absolute;
  right: 30px;
  text-align: right;
  top: 14px;
`;

export const ImgStyle = styled.img`
  height: 170px;
  opacity: 1;
  position: absolute;
  right: 8px;
  top: 32px;
  width: 165px;
  z-index: 2;
`;

export const ImgBackGroundCardStyle = styled.img`
  position: absolute;
  right: 16px;
  top: 70px;
  z-index: 0;
`;

export const CardButtonPokemonStyle = styled.button`
  background: transparent;
  border: none;
`;

