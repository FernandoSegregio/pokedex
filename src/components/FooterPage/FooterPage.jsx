import React, {useContext} from 'react';
import { FooterStyle } from './style';
import PokedexContext from '../../context/PokedexContext';

function FooterPage() {
	const { totalPage } = useContext(PokedexContext);
	return (
		<FooterStyle>{ totalPage }</FooterStyle>
	);
}

export default FooterPage;