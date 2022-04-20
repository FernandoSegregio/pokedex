import styled from 'styled-components';

export const FooterStyle = styled.footer`
  align-items: center;
  color: var(--black-200);
  display: flex;
  font-family: var(--unnamed-font-family-montserrat);
  font-size: var(--unnamed-font-size-25);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-bold); 
  line-height: var(--unnamed-line-spacing-30); 
  justify-content: center;
  letter-spacing: var(--unnamed-character-spacing-0);
  margin-top: 70px;
  padding: 20px;

  @media (max-width: 600px){
      font-size: var(--unnamed-font-size-20);
      font-weight: var(--unnamed-font-weight-600);
      line-height:  var(--unnamed-line-spacing-22); 
      margin-left: 10px;
      margin-top: 70px;
      padding: 10px;
    }
`;

export const ButtonStyle = styled.button`
  border: none;
  padding: 20px;
  background-color: transparent;
  font-size: 20px;

  @media (max-width: 600px){
      margin-top: 0px;
      padding: 0 10px;
    }
`;

