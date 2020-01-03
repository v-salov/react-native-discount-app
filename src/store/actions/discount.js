import {Http} from "../../http";
import {LOAD_DISCOUNTS, START_REFRESH, TEST_DISCOUNTS} from "../types";

export const loadDiscounts = (refreshing) => async dispatch => {

  if (refreshing) {
    dispatch({type: START_REFRESH})
  }

  const data = await updateDiscounts();

  dispatch({
    type: LOAD_DISCOUNTS,
    payload: data
  })

}
export const updateDiscounts = async (test) => {
  try {
    const data = await Http.get('https://vs-react.firebaseio.com/discounts.json')
    let discounts = []
    const localDiscounts =  Object.entries(data).map(([key, value]) => {
      discounts.push({...data[key], id: key})
      return [key, JSON.stringify(value)]
    })
    return {discounts, localDiscounts}
  } catch (e) {
    console.log(e, 'Server error')
  }
}


