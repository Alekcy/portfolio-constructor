import { ADD_CURRENCY, CHANGE_SHARE, DELETE_CURRENCY, END_CHANGING_SHARE, LOCK } from './actionTypes';

export function addCurrency(currency) {
	return {
		type: ADD_CURRENCY,
		payload: currency
	}
}

export function deleteCurrency(currency) {
	return {
		type: DELETE_CURRENCY,
		payload: currency
	}
}

export function changeShare(changedCurrency) {
	return {
		type: CHANGE_SHARE,
		payload: changedCurrency
	}
}

export function lockCurrency(currencyName) {
	return {
		type: LOCK,
		payload: currencyName
	}
}