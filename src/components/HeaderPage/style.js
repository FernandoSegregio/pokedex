import styled from 'styled-components';

export const HeaderStyle = styled.header`
color: var(--black-200);
font-family: var(--unnamed-font-family-montserrat);
font-size: var(--unnamed-font-size-35);
font-style: var(--unnamed-font-style-normal) normal; 
font-weight: var(--unnamed-font-weight-bold);
letter-spacing: var(--unnamed-character-spacing-0);
line-height:  var(--unnamed-line-spacing-43); 
margin-left: 100px;
margin-top: 41px;
opacity: 1;
text-align: left;

    @media (max-width: 600px){
      font-size: var(--unnamed-font-size-25);
      font-weight: var(--unnamed-font-weight-bold);
      line-height:  var(--unnamed-line-spacing-30); 
      margin-left: 31px;
      margin-top: 33px;
    }


`;

