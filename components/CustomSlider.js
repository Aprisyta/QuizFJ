import React from 'react';
import { StyleSheet, Slider } from 'react-native';
import { green, blue } from '../utils/colors'
class CustomSlider extends React.Component {
  render () {
    const { value, onChange } = this.props
    return (
      <Slider
        style={styles.slider}
        step={1}
        maximumValue={4}
        minimumValue={0}
        value={value}
        onValueChange={onChange}
        maximumTrackTintColor={green}
        minimumTrackTintColor={green}
        thumbTintColor={blue}
      />
    )
  }
}

const styles = StyleSheet.create({
  slider: {
    borderRadius: 100,
    width: 250,
    margin: 25,
    transform: [
      { rotateZ : '-90deg' },
      {  scaleY: 10 },
    ],
  },
})

export default CustomSlider;
