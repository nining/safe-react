import React, { ReactNode } from 'react'
import { MuiThemeProvider, Theme as MuiTheme } from '@material-ui/core/styles'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Store } from 'redux'
import { History } from 'history'
import { theme } from '@gnosis.pm/safe-react-components'

declare type Theme = typeof theme

type ProvidersProps = {
  children: ReactNode
  store: Store
  history: History
  styledTheme: Theme
  muiTheme: MuiTheme
}

function Providers({ children, store, styledTheme, muiTheme, history }: ProvidersProps): React.ReactElement {
  return (
    <ThemeProvider theme={styledTheme}>
      <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
          <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers
