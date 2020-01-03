import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/app-header-icon'
import {CategoryList} from "../components/category-list";
import {useSelector} from "react-redux";
import { Button, ThemeProvider } from 'react-native-elements';

export const CategoriesScreen = ({discount={}}) => {
  const categories = useSelector(state => state.categories)

  return (
    <ThemeProvider>
      <CategoryList categories={categories}/>
    </ThemeProvider>
    )
}

CategoriesScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Категории',
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
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})
