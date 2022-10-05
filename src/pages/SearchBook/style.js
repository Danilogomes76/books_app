import { keyframes } from "@stitches/react"
import { styled } from '../../stitches.config';


const scaleUp = keyframes({
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.5)' },
});

const scaledown = keyframes({
    '0%': { transform: 'scale(1.5)' },
    '100%': { transform: 'scale(1)' },
});

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$blood',

    '& form': {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px 0px',
        marginRight: '10px',

        '& input[type=text]': {
            border: 'none',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            paddingLeft: '5px',

            '&:focus': {
                outline: 'none'
            }
        },
    }
})

export const Button = styled('button', {
    cursor: 'pointer',
    background: 'transparent',
    outline: '1px solid',
    color: 'white',
    fontWeight: '500',
    border: 'none',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '5px',

    '&:hover': {
        color: '#cccccc'
    }
})

export const Book = styled('div', {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    borderRadius: '15px',
    padding: '5px',

    '& button': {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marignTop: '5px'
    },

    '& p': {
        cursor: 'default'
    }
})

export const BookImg = styled('img', {
    width: '128px',
    height: '187px',
    padding: '6px',
    background: '$alert',
    borderRadius: '5px',
    marginBottom: '8px',
})

export const FavoriteImg = styled('img', {
    width: '30px',


    '&:hover': {
        animation: `${scaleUp} 200ms`,
        animationFillMode: 'forwards'
    },

    '&:not( :hover )': {
        animation: `${scaledown} 200ms`,
        animationFillMode: 'forwards'
    }
})


export const BookImgContainer = styled('div', {
    display: 'inherit',

    '& img': {
        width: '700px'
    },

    variants: {
        size: {
            bp1: {
                '& img': {
                    width: '100%'
                }
            }
        }
    },
})

export const ContainerBooks = styled('div', {
    color: '$alert',
    fontWeight: 'bold',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '10px 10px',
    gridTemplateAreas: '". . . . ."". . . . ."',

    variants: {
        size: {
            bp1: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

                [`& ${Book}`]: {
                    width: '250px'
                },

                [`& ${BookImg}`]: {
                    marginBottom: '5px'
                },
            }
        }
    },

})