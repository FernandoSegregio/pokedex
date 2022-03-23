import React, {useContext} from 'react';
import { FooterStyle, ButtonStyle } from './style';
import PokedexContext from '../../context/PokedexContext';

function FooterPage() {
	const { totalPage, page, setPage } = useContext(PokedexContext);

	function previousPage() {
		if(page > 0) {
			setPage(page - 1);
		}
	}

	function nextPage() {
		if(page + 1 !== totalPage) {
			setPage(page + 1);
		}
	}


	return (
		<FooterStyle>
			<ButtonStyle onClick={previousPage}>◀️</ButtonStyle>
			<span>{page + 1} de {totalPage}</span>
			<ButtonStyle onClick={nextPage}>▶️</ButtonStyle>
		</FooterStyle>
	);
}

export default FooterPage;