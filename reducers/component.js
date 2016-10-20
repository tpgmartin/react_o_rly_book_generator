const initialState = {
  text: 'Hello, World!',
  toggle: true
}

const component = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_FORM':
      return {
      }
    default:
      return state
  }
}

export default component
