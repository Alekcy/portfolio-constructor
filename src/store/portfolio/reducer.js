import { CHANGE_SHARE, END_CHANGING_SHARE, DELETE_CURRENCY, ADD_CURRENCY, LOCK } from "./actionTypes";

const initialState = {
	currenciesList: {
		BTC: {
			share: 33,
			locked: false,
		},
		ETH: {
			share: 33,
			locked: false,
		},
		XRP: {
			share: 33,
			locked: false,
		},
	}
};

export default function reduce(state = initialState, action = {}) {
	switch (action.type) {
		case ADD_CURRENCY:
			return {
				currenciesList: {
					...state.currenciesList,
					[action.payload]: {
						share: 0,
						locked: false,
					}
				}
			};
		case DELETE_CURRENCY:
			let listWithoutDeleted = {...state.currenciesList};
			delete listWithoutDeleted[action.payload];
			return {
				currenciesList: listWithoutDeleted
			};
		case CHANGE_SHARE:
			let currenciesNew = {};
			let lockedShare = getLockedShare(state.currenciesList);

			if ((100 - lockedShare) >= action.payload.share) {
				currenciesNew[action.payload.currencyName] = {
					...state.currenciesList[action.payload.currencyName],
					share: action.payload.share,
				};
			} else {
				currenciesNew[action.payload.currencyName] = {
					...state.currenciesList[action.payload.currencyName],
					share: 100 - lockedShare,
				};
			}
			const share = currenciesNew[action.payload.currencyName].share + lockedShare;

			let otherCurrenciesShare = 100 - share;
			let length = Object.keys(state.currenciesList).filter(currency => !state.currenciesList[currency].locked).length - 1;
			let shareForOneOtherCurrency = otherCurrenciesShare / length;
			Object.keys(state.currenciesList).forEach(currencyName => {
				if (currencyName !== action.payload.currencyName) {
					if (!state.currenciesList[currencyName].locked) {
						currenciesNew[currencyName] = {
							...state.currenciesList[currencyName],
							share: shareForOneOtherCurrency,
						};
					} else {
						currenciesNew[currencyName] = {...state.currenciesList[currencyName]};
					}
				}
			});
			return {
				currenciesList: currenciesNew,
			};
		case LOCK:
			return {
				currenciesList: {
					...state.currenciesList,
					[action.payload]: {
						...state.currenciesList[action.payload],
						locked: !state.currenciesList[action.payload].locked
					}
				}
			};
		default:
			return state;
	}
}

function getLockedShare(currenciesList) {
	let lockedShare = 0;
	Object.keys(currenciesList).forEach(currency => {
		if (currenciesList[currency].locked) {
			lockedShare += currenciesList[currency].share;
		}
	});
	return lockedShare;
}

