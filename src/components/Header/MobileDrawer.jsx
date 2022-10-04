import React from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
import { MobileTriggerButton, MobileTriggerImg, DrawerContainer } from './style';
import mobileTrigger from '../../assets/trigger.svg'
import bookImg from '../../assets/book.png'
import { AiFillHome, AiOutlineBook, AiOutlineSearch } from 'react-icons/ai'


function MobileDrawer() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <MobileTriggerButton onClick={toggleDrawer}>
                <MobileTriggerImg alt='mobileTrigger' src={mobileTrigger} />
            </MobileTriggerButton>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
            >
                <DrawerContainer>
                    <img alt='book' src={bookImg} />
                    <ul>
                        <Link to={'/'}><li><AiFillHome  />Home</li></Link>
                        <Link to={'/books'}><li><AiOutlineBook  />Books</li></Link>
                        <Link to={'/search'}><li><AiOutlineSearch  />FindBook</li></Link>
                    </ul>
                </DrawerContainer>
            </Drawer>
        </>
    )
}

export default MobileDrawer;