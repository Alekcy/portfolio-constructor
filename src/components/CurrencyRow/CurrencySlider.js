import * as React from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const CurrencySlider = withStyles({
	root: {
		color: '#cfcfcf',
		height: 8,
	},
	thumb: {
		height: 16,
		width: 16,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -4,
		marginLeft: -12,
		'&:focus,&:hover,&$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);