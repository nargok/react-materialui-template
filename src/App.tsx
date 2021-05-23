import React from 'react';
import { ThemeProvider } from '@material-ui/core'

import { initialStore, Provider } from './store/'
import ListRefreshControl from './components/ListRefreshControl'
import CountryList from './components/CountryList'
import GlobalStyles from './components/GlobalStyles'

import theme from './theme'

const store = initialStore();

function App() {
  return (
    <Provider value={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <h3>React UI template project</h3>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;