import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,

  container: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 10,
  },

  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logo: {
    width: '$largeImageSize',
  },
  text: {
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: -0.5,
    marginTop: 30,
    color: '$white',
  },
});
