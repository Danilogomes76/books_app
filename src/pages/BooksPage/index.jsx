import React from 'react';
import { useSelector } from 'react-redux';
import noBooks from '../../assets/nobooks.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TableBooks from '../../components/Table';
import { Container, NoBooksContainer } from './styles';

function Books() {

    let books = useSelector((state) => { return state.saveOrDelete })
    
    return (
        <Container>
            <Header />
            {books.length > 0 ? <TableBooks /> : (
                <NoBooksContainer size={{'@bp1': 'bp1'}}>
                    <h2>No books saved</h2>
                    <img src={noBooks} alt='noBooks'/>
                </NoBooksContainer>
            )}
            <Footer />
        </Container>
    );
}

export default Books;