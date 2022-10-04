import { styled } from '../../stitches.config';

export const Booksadded = styled('div', {
    display: 'flex',
    marginBottom: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',

    '& tr': {
        outline: '2px solid',
        textAlign: 'center'
    },

    '& td': {
        outline: '2px solid',
        padding: '0px 10px'
    },

    '& input': {
        background: 'white',
        border: 'none',
        width: '300px',
        borderRadius: '4px',
        padding: '3px',
        margin: '15px 0px'
    },

    '& thead': {
        outline: '2px solid'
    },

    variants: {
        size: {
            bp1: {
                '& table': {
                    minWidth: '100%',
                    margin: '10px'
                },

                '& input':{
                    width: '80%'
                }
            }
        }
    },

})

export const Table = styled('table', {
    background: 'white',
    padding: '10px',
    borderRadius: '15px',
    maxWidth: '700px',
})

export const Trtittle = styled('tr', {
    textAlign: 'center',
    background: 'black',
    color: 'white',
    textTransform: 'uppercase',

    '& td': {
        padding: '5px'
    },
})



export const TdBookTitle = styled('td', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
        width: '64px',
        height: '94px',
    }
})
export const Tritem = styled('tr', {
    background: 'AliceBlue',
    fontStyle: 'italic',
})

export const TdBtnBox = styled('td', {
    '& button': {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: '4px',
        border: '1px solid',
        paddingLeft: '2px',
        paddingRight: '2px',
        backgroundColor: 'red',
        color: 'white',
        cursor: 'pointer',
        width: '100%',

        '&:hover': {
            background: '#bc1515'
        }
    }
})
