import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 40;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '100%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    opacity: 0.5,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 20,
    color: '$white',
  },
  errorMessage: {
    color: '$red',
    fontSize: 12,
    paddingHorizontal: 20,
    marginTop: -5,
  },
});
