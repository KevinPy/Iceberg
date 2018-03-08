import { INIT } from '../constants/app';

export const defaultState = {
  data: false
};

export const app = (state = defaultState, action) => {

  switch (action.type) {

    case INIT:
      return [
        ...state,
        {
          data: true
        }
      ]

    default:
      return state;
  }

};