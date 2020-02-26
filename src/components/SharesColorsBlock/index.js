import * as React from 'react';
import { Box, Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { currenciesColors } from "../../others/CurrenciesColors";

const SharesContainer = styled(Box)({
	width: '100%',
	display: 'flex',
	marginBottom: 10,
});
const Share = styled(({backgroundColor, share, ...other}) => <Box {...other} />)({
	height: 10,
	backgroundColor: props => props.backgroundColor,
	width: props => `${props.share}%`
});

export const SharesColorsBlock = ({ currencies }) => {

	return (
		<SharesContainer>
			{
				Object.keys(currencies).map(currency => (
					<Share
						backgroundColor={currenciesColors[currency]}
						share={currencies[currency].share}
					/>
				))
			}
		</SharesContainer>
	)
};