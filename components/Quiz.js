import React from 'react';
import { StyleSheet, Text, View, Slider, ProgressBarAndroid } from 'react-native';

class Quiz extends React.Component {

  state = {
    index: 0,
    score: 0,
    value: 0,
  }

  reset = () => {
    console.log(this.slider.toString());
    this.slider.setNativeProps({value: 0});
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }))
  }

  increaseScore = (val) => {
    console.log(this.slider.value + "uo");
    this.setState({ value: this.slider.value })
  }

  render() {
    const questions = ["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]
    const { index, value, score } = this.state
    // console.log(r);
    if( index === questions.length ) {
      return(
        <View>
          <Text>Quiz complete</Text>
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
          color={'#0000ff'}
        />
      <Text>{`${questions[index]}`}</Text>
        <Slider
          minimumValue={0}
          maximumValue={10}
          step={1}
          style={styles.slider}
          onChange={this.increaseScore.bind(this)}
          ref={r => this.slider = r}
          minimumTrackTintColor={'#0000ff'}
          maximumTrackTintColor={'#0000ff'}
          thumbTintColor={'#D3D3D3'}
        />
      <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
        <Text
          onPress={() => this.reset()}
          >
          Next >
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  progressBar: {
    width: 300,
    transform: [
      { scaleY: 5 }
    ]
  },
  // text: {
  //   alignSelf
  // },
  slider: {
    borderRadius: 100,
    width: 250,
    transform: [
      { rotateZ : '-90deg' },
      {  scaleY: 10 },
    ],
  },
});

export default Quiz;
