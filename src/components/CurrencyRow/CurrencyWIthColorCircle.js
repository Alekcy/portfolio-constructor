import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { currenciesColors } from "../../others/CurrenciesColors";

const BoxContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center'
});

const Circle = styled(({color, ...other}) => <Box {...other} />)({
	height: 10,
	width: 10,
	borderRadius: 100,
	backgroundColor: props => props.color,
	marginRight: 5
});

export const CurrencyWithColorCircle = ({ currencyName }) => {
	return (
		<BoxContainer>
			<Circle color={currenciesColors[currencyName]} />
			<Typography style={{ fontWeight: 700 }}>{currencyName}</Typography>
		</BoxContainer>
	)
};