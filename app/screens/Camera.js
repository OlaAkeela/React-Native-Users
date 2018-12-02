import React from 'react';
import { Text, View } from 'react-native';
import { Permissions } from 'expo';

import { CameraComponent } from '../components/Camera';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return <CameraComponent {...this.props} />;
  }
}
