import React from 'react'
import { View, StyleSheet, FlatList, Text, RefreshControl } from 'react-native'
import { Discount } from './discount'
import {loadDiscounts} from "../store/actions/discount";
import {useDispatch, useSelector} from "react-redux";

export const DiscountList = ({ data = [], onOpen = ()=>{} }) => {
  const dispatch = useDispatch()

  const refreshing = useSelector(state => state.refreshing)

  const onRefresh = React.useCallback(() => {
    dispatch(loadDiscounts(true));
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      {!data.length && <Text style={styles.noItems}>Доступных скидок нет</Text>}
      <FlatList
        data={data}
        keyExtractor={discount => discount.id.toString()}
        renderItem={({ item }) => <Discount product={item} onOpen={onOpen} />}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItems: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18
  }
})
