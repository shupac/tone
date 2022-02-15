import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'comp/Text'

import { removeLeadingZero } from 'utils'

export const defaultGroups = [
  {
    name: 'fat',
    abbr: 'fat',
    color: '#9D64E5',
  },
  {
    name: 'protein',
    abbr: 'protein',
    color: '#DB5353',
  },
  {
    name: 'fruit',
    abbr: 'fruit',
    color: '#F0BA30',
  },
  {
    name: 'starch',
    abbr: 'starch',
    color: '#EF873C',
  },
  {
    name: 'dairy',
    abbr: 'dairy',
    color: '#4EB3EC',
  },
  {
    name: 'vegetable',
    abbr: 'veg.',
    color: '#58C777',
  },
  {
    name: 'condiment',
    abbr: 'cond.',
    color: '#000000',
  },
]

export const calcFoodTotals = (food) => {
  const foodGroups = food?.food_groups || food
  const totals = defaultGroups.map((group) => ({
    ...group,
    quantity: food.quantity * foodGroups[group.name],
  }))

  return totals.filter(({ quantity }) => quantity)
}

export const calcMealTotals = (meal) => {
  const totals = defaultGroups.map((group) => ({ ...group, quantity: 0 }))

  meal.foods.forEach((food) => {
    defaultGroups.forEach(({ name: type }) => {
      if (food[type]) {
        totals.find(({ name }) => name === type).quantity +=
          food.quantity * food[type]
      }
    })
  })

  return totals.filter(({ quantity }) => quantity)
}

export const calcDailyTotals = (meals) => {
  const totals = defaultGroups.map((group) => ({ ...group, quantity: 0 }))

  meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      defaultGroups.forEach(({ name: type }) => {
        if (food[type]) {
          totals.find(({ name }) => name === type).quantity +=
            food.quantity * food[type]
        }
      })
    })
  })

  return totals
}

const Conversions = ({ style, conversions, conversionStyle }) => {
  return (
    <View style={[styles.container, style]}>
      {conversions.map(({ name, color, quantity }) => (
        <View style={[styles.conversion, conversionStyle]} key={name}>
          <View style={[{ backgroundColor: color }, styles.bubble]}>
            <Text style={styles.quantity} testID={`conversion-qty-${name}`}>
              {removeLeadingZero(quantity)}
            </Text>
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: -10,
  },
  conversion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  bubble: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  quantity: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  name: {
    textTransform: 'capitalize',
    fontSize: 14,
  },
})

export default Conversions
