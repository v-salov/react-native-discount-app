import React, {useEffect} from 'react'
import { View, Text, StyleSheet, AsyncStorage, Button } from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/app-header-icon'
import {loadDiscounts, updateDiscounts2} from "../store/actions/discount";

export const TestScreen = ({discount={}}) => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadDiscounts())
  },[dispatch])

  const data = useSelector(state=>state.localDiscounts)
  console.log('localDiscounts',data)
  const storeData = async () => {

    try {
      await AsyncStorage.multiSet(data, ()=>{
      });
    } catch (error) {
      // Error saving data
    }
  };

  const retrieveData = async () => {
    console.log('get data')
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {

          let key = store[i][0];
          console.log(key)
          let value = store[i][1];
          console.log(JSON.parse(value))
        });
      });
    });
  };
  return (
    <View style={styles.center}>
      <Text>Тесты</Text>
      <Button title="Set Data" onPress={storeData}/>
      <Button title="Get Data" onPress={retrieveData}/>
      <Button title="CLEAR" onPress={()=>AsyncStorage.clear()}/>


    </View>
  )
}

TestScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Тесты',
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

    alignItems: 'center'
  },
  version: {
    fontFamily: 'open-bold'
  }
})
