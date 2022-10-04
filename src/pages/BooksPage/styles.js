import { styled } from '../../stitches.config';

export const Container = styled('div', {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const NoBooksContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px',
    textTransform: 'uppercase',
    color: '$background',

    'h2':{
        padding: '5px',
        borderRadius: '6px',
        background: '$alert',
        textShadow: '2px 2px 2px black',
    },

    variants: {
        size: {
            bp1: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '30px',
                textTransform: 'uppercase',
                color: '$background',

                '& img':{
                    width: '100%'
                },

                'h2':{
                    padding: '5px',
                    borderRadius: '6px',
                    background: '$alert',
                    textShadow: '2px 2px 2px black',
                }
            }
        }
    }
})