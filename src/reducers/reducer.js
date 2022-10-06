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
            const bookName = action.payload.title
            const authorName = action.payload.author[0]
            const thumbnail = action.payload.thumbnail || noImg
            const id = action.payload.id
           
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

