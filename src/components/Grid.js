import { useRef, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'comp/Text'

const Grid = ({ style, children, numCols, colGap, rowGap }) => {
  const [containerWidth, set_containerWidth] = useState(350)
  const containerRef = useRef()
  const numItems = children.length
  const numRows = Math.ceil(numItems / numCols)
  const items = []

  for (let row = 0; row < numRows; row++) {
    const rowItems = []
    for (let col = 0; col < numCols; col++) {
      const index = row * numCols + col
      rowItems.push(children[index] || <View key={`empty_${index}`} />)
      if (col !== numCols - 1) rowItems.push(<View key={`spacer_${index}`} />)
    }
    items.push(rowItems)
  }

  useEffect(() => {
    if (containerRef.current.currentWidth) {
      set_containerWidth(containerRef.current.clientWidth)
    }
  }, [])

  const totalColGap = (numCols - 1) * colGap
  const cellWidth = (containerWidth - totalColGap) / numCols

  return (
    <View
      style={[style, styles.container]}
      ref={containerRef}
      onLayout={(e) => set_containerWidth(e.nativeEvent.layout.width)}
    >
      {items.map((row, index) => (
        <View style={[styles.row, { marginBottom: rowGap }]} key={index}>
          {row.map((el, index) => (
            <View style={{ width: index % 2 ? colGap : cellWidth }} key={index}>
              {el}
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: { flexDirection: 'row' },
  cell: {},
})

export default Grid
