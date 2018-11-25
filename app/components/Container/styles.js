import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
  },
});
