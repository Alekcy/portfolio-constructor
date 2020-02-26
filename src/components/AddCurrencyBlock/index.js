import * as React from 'react';
import { useState } from 'react';
import { Paper, Box, Grid, Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { SelectCurrency } from "./SelectCurrency";
import { currenciesList } from "../../others/CurrenciesList";
import { Add } from '@material-ui/icons';

const AddBlockPaper = styled(Paper)({ padding: 30, marginTop: 40 });
const AddButton = styled(Button)({ maxWidth: '50px', maxHeight: '50px', minWidth: '50px', minHeight: '50px' });

export const AddCurrencyBlock = ({ currenciesActive, addCurrency }) => {
	const [currency, setCurrency] = useState('');
	if (currenciesList.filter(currency => !currenciesActive[currency]).length === 0) return null;
	return (
		<AddBlockPaper variant="outlined">
			<Grid container justify="space-between">
				<Grid item md={4}>
					<SelectCurrency
						value={currency} onChange={e => setCurrency(e.target.value)}
						items={currenciesList.filter(currency => !currenciesActive[currency])}
					/>
				</Grid>
				<Grid item md={4}>
					<Grid container justify="flex-end">
						<AddButton
							disabled={currency === ''}
							variant="outlined"
							onClick={() => {
								addCurrency(currency);
								setCurrency('');
							}}
						>
							<Add />
						</AddButton>
					</Grid>
				</Grid>
			</Grid>
		</AddBlockPaper>
	);
};