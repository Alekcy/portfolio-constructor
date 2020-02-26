import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PortfolioConstructor } from "./containers";
import { store } from './store';
import { Container } from "@material-ui/core";

const theme = createMuiTheme({});

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Container maxWidth="md">
					<PortfolioConstructor />
				</Container>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
