import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignRCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fill: {
    flex: 1,
  },
  fillhalf: {
    flex: 0.5,
  },
  textCenter: {
    textAlign: 'center',
  },
  circle: {
    borderRadius: 50,
  },
  radius: {
    borderRadius: 15,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  directionRow: {
    flexDirection: 'row',
  },
  directionColumn: {
    flexDirection: 'column',
  },
  horizontalMargin: {
    marginHorizontal: 30,
  },
  topMargin: {
    marginTop: 50,
  },
  shadow: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
