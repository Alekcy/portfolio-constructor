import * as React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { CurrencyWithColorCircle } from './CurrencyWIthColorCircle';
import { CenterElement } from "./CenterElement";
import { CurrencySlider } from "./CurrencySlider";
import { Close } from '@material-ui/icons';

const CurrencyRowPaper = styled(Paper)({
	padding: 30,
	marginBottom: 5,
});
const CloseIcon = styled(Close)({
	cursor: 'pointer',
});

export const CurrencyRow = ({ currency, share, changeShare, disabledSlider, onLockClick, deleteCurrency }) => {
	return (
		<CurrencyRowPaper elevation={2}>
			<Grid container justify="space-between">
				<Grid item>
					<CurrencyWithColorCircle currencyName={currency} />
				</Grid>
				<Grid item>
					<CenterElement
						share={share} locked={disabledSlider}
						onLockClick={() => onLockClick(currency)}
					/>
				</Grid>
				<Grid item>
					<CloseIcon onClick={() => deleteCurrency(currency)} fontSize="small" color="error" />
				</Grid>
			</Grid>
			<Grid container>
				<Grid item style={{ width: '100%' }}>
					<CurrencySlider
						value={share} step={1}
						onChange={(e, value) => changeShare(value)}
						defaultValue={20} disabled={disabledSlider}
					/>
				</Grid>
			</Grid>
		</CurrencyRowPaper>
	)
};