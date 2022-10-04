import React from 'react';
import { Adicionais, Container, DevInformations, H1, P, Sobre } from './style'
import gitImg from '../../assets/gitHub.png'
import linkeimg from '../../assets/linkedin.png'

function Footer() {

    return (
        <Container>
            <Sobre>
                <H1>Sobre</H1>
                <P>Book page for you to organize your favorite books.</P>
            </Sobre>
            <Adicionais>
                <H1>Developer information</H1>
                <DevInformations>
                    <a href='https://github.com/Danilogomes76' target='blank'>
                        <img src={gitImg} alt='gitHUb'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/danilo-gomes76/' target='blank'>
                        <img src={linkeimg} alt='linkedin'></img>
                    </a>
                </DevInformations>
            </Adicionais>

        </Container>
    )
}

export default Footer;
