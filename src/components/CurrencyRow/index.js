import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CurrencyWithColorCircle } from './CurrencyWIthColorCircle';
import { CurrencySlider } from "./CurrencySlider";

const CurrencyRowPaper = styled(Paper)({
	padding: 10,
	marginBottom: 5,
});

/*33.3
33.3
33.3*

50
25
25

50

33.3*/

export const CurrencyRow = ({ currency, share, changeShare, onEndChangingShare }) => {
	return (
		<CurrencyRowPaper elevation={2}>
			<Grid container>
				<Grid item>
					<CurrencyWithColorCircle currencyName={currency} />
				</Grid>
			</Grid>
			<Grid container>
				<Grid item style={{ width: '100%' }}>
					<CurrencySlider
						value={share} step={1} valueLabelDisplay="auto"
						onChangeCommitted={(e, value) => onEndChangingShare(value)}
						onChange={(e, value) => changeShare(value)}
						defaultValue={20}
					/>
				</Grid>
			</Grid>
		</CurrencyRowPaper>
	)
};