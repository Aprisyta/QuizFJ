import React from 'react';
import { StyleSheet, Text, View, Slider, ProgressBarAndroid } from 'react-native';
import CustomSlider from './CustomSlider'
import { green, grey } from '../utils/colors'

class Quiz extends React.Component {

  state = {
    index: 0,
    score: 0,
    value: 0,
  }

  reset = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
      value: 0,
      score: prevState.score + prevState.value
    }))
  }

  slide = (value) => {
    this.setState({ value })
  }

  render() {
    const questions = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]
    const { index, value, score } = this.state
    if( index === questions.length ) {
      return(
        <View>
          <Text>Quiz complete. Score: {score}</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ProgressBarAndroid
          style={styles.progressBar}
          progress={index/questions.length}
          styleAttr='Horizontal'
          indeterminate={false}
          color={'#54ff9f'}
        />
        <Text style={styles.otherText}>
          {`Question ${questions[index]}`}
        </Text>
        <Text style={styles.otherText}>Everyday</Text>
        <CustomSlider
          value={value}
          onChange={(value) => this.slide(value)}
        />
        <Text style={styles.otherText}>Not at all</Text>
        <Text
          onPress={() => this.reset()}
          style={styles.nextText}
        >
          Next >
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 0,
  },
  progressBar: {
    width: 300,
    transform: [
      { scaleY: 5 }
    ]
  },
  nextText: {
    alignSelf: 'flex-end',
    color: green
  },
  otherText: {
    color: grey,
    // padding: 20,
  }
});

export default Quiz;
