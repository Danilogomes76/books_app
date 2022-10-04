import { styled } from '../../stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$blood',
})

export const BookContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    background: '$blood_800',
    margin: '10px',
    padding: '10px',
    borderRadius: '4px',
    boxShadow: '2px 2px 2px black',
    textShadow: '2px 2px 2px black',
    color: '$background',

    variants: {
        size: {
            bp1: {
                width: 'initial'
            }
        }
    },

})

export const BooksForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    justifyContent: 'space-evenly',

    '& input': {
        border: 'none',
        width: '80%',
        borderRadius: '4px',
        padding: '3px'
    },
})

export const Button = styled('button', {
    border: 'none',
    marginTop: '10px',
    width: '80%',
    padding: '5px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    cursor: 'pointer',
    background: '$alert',
    color: '$white',

    '&:hover': {
        background: '$background'
    },

})

export const BookLogo = styled('img', {
    width: '300px',
    alignSelf: 'center',

    variants: {
        size: {
            bp1: {
                width: '100%'
            }
        }
    },
})


