import React, { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { sentenceCase } from 'sentence-case'

import Text from 'comp/Text'
import Picker, { pickerStyles } from 'comp/Picker'
import Chevron from 'comp/Chevron'
import Conversions, { defaultGroups } from 'comp/Conversions'

import { customColors } from 'utils/colors'

const getItems = (conversion) => {
  let items = []
  for (let i = 0; i <= 20; i += 0.25) {
    items.push({
      value: i,
      label: i + ` ${sentenceCase(conversion)}`,
    })
  }
  return items
}

const ConversionPicker = ({
  style,
  conversion,
  value,
  onValueChange,
  ...rest
}) => {
  const items = useMemo(() => getItems(conversion), [conversion])

  const color = useMemo(
    () => defaultGroups.find(({ name }) => name === conversion).color,
    [conversion]
  )

  const defaultLabel = useMemo(
    () => items.find((item) => item.value === value).label,
    []
  )

  return (
    <Picker
      value={value}
      items={items}
      placeholder={{}}
      touchableWrapperProps={{
        hitSlop: { top: 10, bottom: 10, left: 0, right: 0 },
      }}
      onValueChange={(value) => onValueChange(Number(value))}
      containerStyle={style}
      {...rest}
      testID={`conversion-picker-${conversion}`}
    >
      <View style={[pickerStyles, styles.container]}>
        {value > 0 ? (
          <View>
            <Conversions
              style={{ flexWrap: 'nowrap', marginBottom: 0 }}
              conversions={[
                {
                  name: conversion,
                  quantity: value,
                  color,
                },
              ]}
              conversionStyle={{
                marginBottom: 0,
              }}
            />
          </View>
        ) : (
          <Text style={{ color: customColors.gray }}>{defaultLabel}</Text>
        )}

        <Chevron direction="down" />
      </View>
    </Picker>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
})

export default ConversionPicker
