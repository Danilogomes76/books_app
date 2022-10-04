import { styled } from '../../stitches.config';

export const Alert = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    border: '2px solid #000',
    boxShadow: 'px',
    background: 'white',
    padding: '10px',
    borderRadius: '10px',

    variants:{
        size:{
            bp1:{
                width: '80%'
            }
        }
    }
})

export const AlertTitle = styled('h2', {

})

export const AlertDescription = styled('div', {
    '& p':{
        margin: '15px 0px'
    }
})
export const AlertButtons = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button': {
        backgroundColor: '#fff',
        border: '1px solid #d5d9d9',
        borderRadius: '8px',
        boxShadow: 'black 0 2px 5px 0',
        color: '#0f1111',
        cursor: 'pointer',
        fontSize: '13px',
        lineHeight: '29px',
        padding: '0 10px 0 11px',
        textAlign: 'center',
        width: '100px',
        marginLeft: '10px',

        '&:hover': {
            color: '#cccccc'
        }
    },
})

