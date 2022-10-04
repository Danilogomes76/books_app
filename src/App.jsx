import React from "react"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import BooksPage from './pages/BooksPage/index'
import HomePage from "./pages/HomePage/index"
import { GlobalStyle } from "./GlobalStyle"
import bookReducer from "./reducers/reducer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchBook from "./pages/SearchBook"
import NoRoute from "./pages/NoRoute"

function App() {

  const allReducers = combineReducers({ saveOrDelete: bookReducer })
  const store = createStore(allReducers)

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/books'} element={<BooksPage />} />
            <Route path={'/search'} element={<SearchBook />} />
            <Route path={'*'} element={<NoRoute />} />
          </Routes>
        </Provider>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
