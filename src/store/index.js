import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {getDiscounts} from "../data";
import {LOAD_CATEGORIES, LOAD_DISCOUNTS, START_REFRESH} from "./types";

const categories = [
  {id: 1, name: 'Молочные продукты', icon:''},
  {id: 2, name: 'Чай, кофе'},
  {id: 3, name: 'Консервы'},
  {id: 4, name: 'Крупы, макароны'},
  {id: 5, name: 'Сладости'},
  {id: 6, name: 'Овощи, фрукты'},
  {id: 7, name: 'Мясоб рыба, яйца'},
  {id: 8, name: 'Алкоголь'},
  {id: 9, name: 'Напитки и соки'},
  {id: 10, name: 'Хозтовары'},
  {id: 11, name: 'Зоотовары'},
  {id: 12, name: 'Колбасы, сыр'},
]
const initialState = {
  discounts: [],
  loading: true,
  refreshing: false,
  localDiscounts: [],
  categories
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DISCOUNTS:
      return {
        ...state,
        discounts: action.payload.discounts,
        localDiscounts: action.payload.localDiscounts,
        loading: false,
        refreshing: false
      }
    case START_REFRESH:
      return {
        ...state,
        refreshing: true
      }
    case LOAD_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))
