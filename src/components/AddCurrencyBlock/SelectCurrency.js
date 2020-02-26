import * as React from 'react';
import { useRef } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { currenciesList } from "../../others/CurrenciesList";

export const SelectCurrency = ({ onChange, value, items }) => {
	const inputLabel = useRef(null);

	return (
		<FormControl fullWidth variant="outlined">
			<InputLabel ref={inputLabel} id="select-currency-l">
				Select currency
			</InputLabel>
			<Select
				labelId="select-currency-l"
				id="select-currency" fullWidth
				value={value} onChange={onChange}
			>
				{items.map(currency => <MenuItem key={currency} value={currency}>{currency}</MenuItem>)}
			</Select>
		</FormControl>
	);
};