import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import { CurrencyRow, AddCurrencyBlock, SharesColorsBlock } from "../../components";
import {
	changeShare,
	endChangingShare,
	lockCurrency,
	deleteCurrency,
	addCurrency,
} from "../../store/portfolio/actions";

const PortfolioContainerPaper = styled(Paper)({
	padding: 100,
	marginTop: 50
});
const HeaderText = styled(Typography)({
	marginBottom: 50,
});

export const PortfolioConstructor = () => {
	const currenciesList = useSelector(store => store.portfolio.currenciesList);
	const dispatch = useDispatch();
	return (
		<PortfolioContainerPaper variant="outlined">
			<HeaderText variant="h5">PORTFOLIO CONSTRUCTOR</HeaderText>
			<SharesColorsBlock currencies={currenciesList} />
			{
				Object.keys(currenciesList).sort().map(currency =>
					<CurrencyRow
						disabledSlider={currenciesList[currency].locked}
						currency={currency}
						deleteCurrency={currencyName => dispatch(deleteCurrency(currencyName))}
						share={currenciesList[currency].share}
						onEndChangingShare={share => dispatch(endChangingShare({
							share,
							currencyName: currency,
						}))}
						changeShare={share => dispatch(changeShare({
								share,
								currencyName: currency,
							}))}
						onLockClick={currencyName => dispatch(lockCurrency(currencyName))}
					/>
				)
			}
			<AddCurrencyBlock
				addCurrency={currencyName => dispatch(addCurrency(currencyName))}
				currenciesActive={currenciesList}
			/>
		</PortfolioContainerPaper>
	);
};