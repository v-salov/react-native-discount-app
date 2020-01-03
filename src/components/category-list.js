import React from 'react'
import {View, StyleSheet, FlatList, Text, RefreshControl, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'

import {Category} from "./category";

export const CategoryList = ({
                               categories = [], onOpen = () => {
  }
                             }) => {
  console.log(categories, 'categories')
  const list = [
    {
      title: 'Appointments',
      icon: 'av-timer'
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff'
    }
  ]


  return (
    <View>
      {
        list.map((item, i) => (
          <TouchableOpacity key={i}>
            <ListItem

              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron
            />
          </TouchableOpacity>
        ))
      }
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
