export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTIST':
            return { ...state, data: action.payload }
        case 'ADD_FAV':
            return { ...state, favs: [...state.favs, action.payload] }
        case 'TDARK':
            return { ...state, theme: 'dark' }
        case 'TLIGHT':
            return { ...state, theme: 'light' }
        default:
            return state

    }
}