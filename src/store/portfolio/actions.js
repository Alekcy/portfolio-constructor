import { ADD_CURRENCY, CHANGE_SHARE, DELETE_CURRENCY, END_CHANGING_SHARE } from './actionTypes';

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

export function endChangingShare(changedCurrency) {
	return {
		type: END_CHANGING_SHARE,
		payload: changedCurrency
	}
}