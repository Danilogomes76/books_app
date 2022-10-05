import bookClass from '../Class'
const noImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

export default function reducer(state = [], action) {

    const SAVED_ITEMS = 'saveItems'

    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) {
        state = savedItems
    }

    switch (action.type) {
        case 'SAVE':
            const name = action.payload.name
            const author = action.payload.author

            if (name && author) {

                const index = state.findIndex(value => value.name == name)

                const booksave = new bookClass(name, author, noImg)

                if (state.length == 0) {
                    state = [...state, booksave]
                    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
                    return state
                }

                if (index < 0) {
                    state = [...state, booksave]
                    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
                    return state
                }
            }
        case 'DELETE':
            state = state.filter(item => item.id !== action.payload)
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
            return state
        case 'FAVORITE':
            const bookName = action.payload[0]
            const authorName = action.payload[1] == undefined ? 'No author name' : action.payload[1][0]
            const thumbnail = action.payload[2] || noImg
            const id = action.payload[3]

            if (bookName && authorName) {

                let index = state.findIndex(value => value.name == bookName)

                const booksave = new bookClass(bookName, authorName, thumbnail, id)

                if (state.length == 0) {
                    state = [...state, booksave]
                    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
                    return state
                }

                if (index < 0) {
                    state = [...state, booksave]
                    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
                    return state
                }
                
            }
        default:
            return state
    }
}

