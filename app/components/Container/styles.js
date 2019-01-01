import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const separatorLength = Dimensions.get('window').width - 56;

export default EStyleSheet.create({
  // *****************
  // Container
  // *****************
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
  // *****************
  // TextContainer
  // *****************
  textContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flex: 1,
  },
  // *****************
  // Profile Top Section
  // *****************
  topContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  insideImage: {
    justifyContent: 'space-between',
    flex: 1,
  },
  editImageIcon: {
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  userName: {
    color: 'white',
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  emailContainer: {
    flexDirection: 'row',
  },
  userEmail: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
  },
  emailConfirmedIcon: {
    width: 25,
    height: 25,
  },
  // *****************
  // Settings Container
  // *****************
  BottomContainer: {
    backgroundColor: '#d3d3d3',
    flex: 1,
  },
  settingsContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
    marginBottom: 10,
  },
  separator: {
    width: separatorLength,
    marginLeft: 56,
    height: 1,
    backgroundColor: 'grey',
  },
});
