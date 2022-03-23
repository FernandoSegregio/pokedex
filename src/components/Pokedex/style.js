import styled from 'styled-components';

export const PokedexStyle = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 100px;
  place-items: center;
  margin-top: 38px;
`;

export const CardStyle = styled.div`
  border-radius: 13px;
  box-shadow: 0px 3px 6px #00000029;
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

`;

export const IdStyle = styled.p`
 
`;

export const ImgStyle = styled.img`

`;
