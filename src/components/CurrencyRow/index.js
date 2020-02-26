import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CurrencyWithColorCircle } from './CurrencyWIthColorCircle';
import { CenterElement } from "./CenterElement";
import { CurrencySlider } from "./CurrencySlider";

const CurrencyRowPaper = styled(Paper)({
	padding: 10,
	marginBottom: 5,
});

export const CurrencyRow = ({ currency, share, changeShare, onEndChangingShare, disabledSlider, onLockClick }) => {
	return (
		<CurrencyRowPaper elevation={2}>
			<Grid container justify="space-between">
				<Grid item>
					<CurrencyWithColorCircle currencyName={currency} />
				</Grid>
				<Grid item>
					<CenterElement share={share} locked={disabledSlider} onLockClick={() => onLockClick(currency)} />
				</Grid>
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
						defaultValue={20} disabled={disabledSlider}
					/>
				</Grid>
			</Grid>
		</CurrencyRowPaper>
	)
};