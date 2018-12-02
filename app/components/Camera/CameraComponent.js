import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeCameraMode } from '../../actions/camera';

class CameraComponent extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    cameraMode: PropTypes.string,
  };

  handleChangeCameraModePress = () => {
    const { dispatch } = this.props;
    dispatch(changeCameraMode());
  };

  render() {
    const { cameraMode } = this.props;
    let cameraType = Camera.Constants.Type.back;
    if (cameraMode === 'back') {
      cameraType = Camera.Constants.Type.back;
    } else {
      cameraType = Camera.Constants.Type.front;
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={cameraType}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={this.handleChangeCameraModePress}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cameraMode: state.camera.cameraMode,
});

export default connect(mapStateToProps)(CameraComponent);
