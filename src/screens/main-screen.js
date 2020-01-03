import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useDispatch, useSelector} from "react-redux";

import { AppHeaderIcon } from '../components/app-header-icon'
import {loadDiscounts} from "../store/actions/discount";
import {THEME} from "../theme";
import {DiscountList} from "../components/discount-list";

export const MainScreen = ({navigation}) => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadDiscounts())
  }, [dispatch])

  const allDiscounts = useSelector(state => state.discounts)

  const loading = useSelector(state => state.loading)

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    )
  }

  return (
    <View>
      <DiscountList data={allDiscounts}/>
    </View>
  )
}

MainScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Скидки',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'

  }
})
