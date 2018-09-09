const initialState = {
    books: []
}

export default (state, action) => {

    switch (action.type) {
        case 'SET_BOOK':
            return {
                books: action.payload
            }
        case 'ADD_BOOKS':
            return {
                books: [
                    ...state.books,
                    action.payload
                ]
            }
        default:
            return state
    }

}