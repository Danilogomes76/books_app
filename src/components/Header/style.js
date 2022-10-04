import { styled } from '../../stitches.config';

export const Separator = styled('div', {
    display: 'flex',
    justifycontent: 'space-between',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& div': {
        display: 'flex',
        alignItems: 'center',

        ['$ h1'[1]]: {
            fontSize: '20px',
        }
    },

    '& img': {
        width: '60px',
        marginRight: '10px',
    },

    '& ul': {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',

        '& li': {
            marginLeft: '15px',
            fontSize: '25px',
            color: '$background',
        },

        "& div[role='menu'].visible": {
            visibility: 'visible'
        }
    },
})

export const MobileTriggerImg = styled('img', {
    display: 'none',
    width: '30px'
})

export const MobileTriggerButton = styled('button', {
    border: 'none',
    background: 'transparent'
})
export const MobileHeader = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
})

export const HeaderComponent = styled('header', {
    display: 'flex',
    background: '$alert',
    padding: '15px',
    alignItems: 'center',
    textShadow: '2px 2px 5px black',
    width: '-webkit-fill-available',
    zIndex: '2',
    color: '$background',

    variants: {
        size: {
            bp1: {
                flexDirection: 'column',
                alignItems: 'flex-Start',
                '& ul': {
                    listStyle: 'none',
                    fontSize: '30px',
                    width: '100%',
                    borderRadius: '5px',

                    '& li': {
                        color: '$background',
                        margin: '15px'
                    }
                },

                [`& ${MobileTriggerImg}`]: {
                    display: 'initial'
                },

                [`& ${Separator}`]: {
                    '& h1': {
                        display: 'none'
                    },

                    '& ul': {
                        display: 'none',
                    },

                    '& img': {
                        display: 'none'
                    }
                },


            }
        }
    },
})

export const DrawerContainer = styled('div', {
    height: '100%',
    background: '$alert',
    color: '$background',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
        width: '50%'
    },
    '& ul': {
        '& li': {
            margin: '15px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',

            '& svg':{
                width: '26px',
                margin: '0px 10px'
            }
        }
    }
})  