import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from 'react-native-slider'
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
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
      />
    )
  }
}

const styles = StyleSheet.create({
  track: {
    borderRadius: 500,
    transform: [
      { scaleY: 5 },
    ]
  },
  slider: {
    width: 250,
    margin: 25,
    transform: [
      { rotateZ : '-90deg' },
    ],
  },
  thumb: {
    backgroundColor: blue,
    borderColor: 'white',
    borderWidth: 4,
    height: 20,
    width: 20,
    borderRadius: 500,
  }
})

export default CustomSlider;
