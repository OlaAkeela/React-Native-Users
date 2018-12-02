import { CHANGE_CAMERA_MODE } from '../actions/camera';

const initialState = {
  cameraMode: 'back',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CAMERA_MODE:
      return {
        ...state,
        cameraMode: state.cameraMode === 'back' ? 'front' : 'back',
      };
    default:
      return state;
  }
};
