
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  status: 'first value'
}

const reducer = (state = initialState, action) => {
  if (action.type == 'SET_STATUS') {
    return Object.assign({}, state, { status: 'new value' + action.payload })
  }
  return state
}

const store = createStore(reducer)

const App = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  //     //Anything returned here can be access by the client
  return { pageProps: pageProps };
}

export default App

