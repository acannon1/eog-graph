import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import LineGraph from './components/LineGraph';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => {
    return(
        <div>           
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Wrapper>
                <Header />
                <LineGraph />
                </Wrapper>
            </MuiThemeProvider>
        </div>
    )
};

export default App;
