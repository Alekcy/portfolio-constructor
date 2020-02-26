import { CHANGE_SHARE, END_CHANGING_SHARE, DELETE_CURRENCY, ADD_CURRENCY } from "./actionTypes";

const initialState = {
	currenciesList: {
		BTC: 33,
		ETH: 33,
		XRP: 33,
	} /*[
		{
			currencyName: 'BTC',
			share: 33.3,
		},
		{
			currencyName: 'ETH',
			share: 33.3,
		},
		{
			currencyName: 'XRP',
			share: 33.3,
		}
	]*/
};

export default function reduce(state = initialState, action = {}) {
	switch (action.type) {
		case END_CHANGING_SHARE:
			let currenciesNew = {};
			const share = action.payload.share;
			currenciesNew[action.payload.currencyName] = share;
			let otherCurrenciesShare = 100 - share;
			let shareForOneOtherCurrency = otherCurrenciesShare / (Object.keys(state.currenciesList).length - 1);
			console.log(otherCurrenciesShare, shareForOneOtherCurrency)
			Object.keys(state.currenciesList).forEach(currencyName => {
				if (currencyName !== action.payload.currencyName) {
					currenciesNew[currencyName] = shareForOneOtherCurrency;
				}
			});
			return {
				currenciesList: currenciesNew,
			};
		case CHANGE_SHARE:
			let currencies = {...state.currenciesList};
			currencies[action.payload.currencyName] = action.payload.share;
			return {
				currenciesList: currencies,
			};
		default:
			return state;
	}
}
