import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Paper } from '@material-ui/core';
import { CurrencyRow } from "../../components";
import { changeShare, endChangingShare } from "../../store/portfolio/actions";

const PortfolioContainerPaper = styled(Paper)({
	padding: 100,
	marginTop: 50
});

export const PortfolioConstructor = () => {
	const currenciesList = useSelector(store => store.portfolio.currenciesList);
	const dispatch = useDispatch();
	return (
		<PortfolioContainerPaper variant="outlined">
			{
				Object.keys(currenciesList).sort().map(currency =>
					<CurrencyRow
						currency={currency}
						share={currenciesList[currency]}
						onEndChangingShare={share => dispatch(endChangingShare({
							share,
							currencyName: currency,
						}))}
						changeShare={share => dispatch(
							changeShare({
								share,
								currencyName: currency,
							}))
						}
					/>
				)
			}
		</PortfolioContainerPaper>
	);
};