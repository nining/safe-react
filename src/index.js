// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from '~/components/Root'
import loadActiveTokens from '~/logic/tokens/store/actions/loadActiveTokens'
import loadCookiesFromStorage from '~/logic/cookies/store/actions/loadCookiesFromStorage'
import loadDefaultSafe from '~/routes/safe/store/actions/loadDefaultSafe'
import loadSafesFromStorage from '~/routes/safe/store/actions/loadSafesFromStorage'
import { store } from '~/store'

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React)
}

// $FlowFixMe
store.dispatch(loadActiveTokens())
store.dispatch(loadSafesFromStorage())
store.dispatch(loadDefaultSafe())
store.dispatch(loadCookiesFromStorage())

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<Root />, root)
}
