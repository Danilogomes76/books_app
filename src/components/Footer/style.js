import { styled } from '../../stitches.config';

export const Container = styled('div',{
    background: '$alert',
    color: '$background',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textShadow: 'black 2px 2px 2px',
    padding: '10px'
})
export const Sobre = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '2px white solid',
})
export const Adicionais = styled('div',{
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '2px white solid',
    marginBottom: '20px',


    '& img':{
        width: '50px'
    }
})
export const H1 = styled('h1',{
    fontSize: '35px',
    margin: '20px',
})
export const P = styled('p',{
    lineHeight: '2.5',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center'
})
export const DevInformations = styled('div',{
    display: 'flex',
    width: '200px',
    justifyContent: 'space-evenly',
    marginBottom: '5px',
})

