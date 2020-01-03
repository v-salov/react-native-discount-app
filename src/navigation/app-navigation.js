import React from 'react'
import {createAppContainer, ThemeColors} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import {MainScreen} from '../screens/main-screen'


import {THEME} from '../theme'
import {CategoriesScreen} from "../screens/categories-screen";
import {FavoriteScreen} from "../screens/favorite-screen";
import {TestScreen} from "../screens/test-screen";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
}

const DiscountNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Favorite: FavoriteScreen,
  },
  navigatorOptions
)

const FavoriteNavigator = createStackNavigator(
  {
    Favorite: FavoriteScreen,
  },
  navigatorOptions
)

const CategoriesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen
  },
  navigatorOptions
)

const bottomTabsConfig = {
  Post: {
    screen: DiscountNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info => (
        <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
      )
    }
  },
  Categories: {
    screen: CategoriesNavigator,
    navigationOptions: {
      tabBarLabel: 'Категории',
      tabBarIcon: info => (
        <Ionicons name='md-list-box' size={25} color={info.tintColor}/>
      )
    }
  },
  Booked: {
    screen: FavoriteNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => (
        <Ionicons name='ios-star' size={25} color={info.tintColor}/>
      )
    },

  }
}
const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
      activeTintColor: '#fff',
      shifting: true,
      barStyle: {
        backgroundColor: THEME.MAIN_COLOR
      }
    })
    : createBottomTabNavigator(bottomTabsConfig, {
      tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
      }
    })




const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Главная'
        // drawerIcon: <Ionicons name='ios-star' />
      }
    },
      Categories: {
      screen: CategoriesNavigator,
      navigationOptions: {
        drawerLabel: 'Категории'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: 'open-bold'
      }
    }
  }
)

export const AppNavigation = createAppContainer(MainNavigator)
