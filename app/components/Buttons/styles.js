import EStyleSheet from 'react-native-extended-stylesheet';

const BUTTON_HEIGHT = 48;
const BORDER_RADIUS = 40;

export default EStyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    width: '100%',
    backgroundColor: '#673888',
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '$white',
    textAlign: 'center',
  },
});
