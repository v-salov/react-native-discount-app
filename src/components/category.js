import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

export const Category = ({category}) => {
  return (
    <View>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 100,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imageBlock: {
    flexBasis: '20%'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  infoBlock: {
    flexGrow: 1,
    flex: 1,
    textAlign: 'left',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 5,
  },
  title: {
    fontFamily: 'open-bold',
    fontSize: 16
  },
  description: {
    fontSize: 14,
    fontFamily: 'open-regular',
    color: 'rgba(0,0,0,0.6)'
  },
  marketBlock: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  market: {
    flexBasis: '30%',
    marginRight: 10
  },

  priceBlock: {
    paddingTop: 10,
    flexBasis: '22%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  discount: {
    fontFamily: 'open-bold',
    backgroundColor: '#9549A9',
    color: '#fff',
    fontSize: 20,
    paddingLeft: 2,
    paddingRight: 2
  },
  discountPrice: {
    top: -7,
    start: -10,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'open-bold',
    backgroundColor: '#f5181e',
    color: '#fff',
    fontSize: 20,
  },
  price: {
    textDecorationLine: 'line-through',
    fontFamily: 'open-regular',
    fontSize: 18,
  }

})

