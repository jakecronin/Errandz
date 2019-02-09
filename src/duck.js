import _ from 'lodash';

export const types = {
  REMOVE_DESTINATION: 'remove_destination',
  ADD_DESTINATION: 'add_destination',
};

export const initialState = () => {
  return {
    destinations: [{},{}],  //start witth two empty
    max: 8,
  };
};

export default reducer = (state = initialState(), action) => {
  const { type, payload } = action;
  const { destinations } = state;

  switch (type) {
    case types.REMOVE_DESTINATION: {
      const { index } = payload;
      if (!index || !destinations) return;
      const dests = _.filter(destinations, (v,i) => i !== index);
      return {
        ...state, destinations: dests
      };
    }
    case types.ADD_DESTINATION: {
      const { destination, index } = action.payload;

      //add new empty if this is a new dest and it is non-first
      console.log('checking description at index for null: ', index, destinations);
      if (index !==0 && !destinations[index].description) {
        destinations.push({});
      }
      destinations[index] = destination;
      return { ...state, destinations: [...destinations] };
    }
    default:
      return state;
  }
};

export const actions = {
  addDestination: ({ destination, index }) => ({ type: types.ADD_DESTINATION, payload: { destination, index }}),
  removeDestination: ({ index }) => ({ type: types.REMOVE_DESTINATION, payload: { index } }),
};
