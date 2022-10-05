import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, BooksForm, BookContainer, Button, BookLogo } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import bookImg from '../../assets/book.png'

function Home() {
  const dispatch = useDispatch()
  const state = useSelector((state) => { return state.saveOrDelete })

  const [name, setname] = useState('')
  const [author, setauthor] = useState('')
  
  function save() {
    const notify = () => toast(`"${name}", foi adicionado a sua lista.`);
    const bookConfirm = state.find(value => value.name.includes(name))
    dispatch({ type: 'SAVE', payload: { name, author } })
    if (!bookConfirm) {
      if(name.length == 0){
        return 
      }
      notify()
    }
  }

  return (
    <Container>
      <Header />
      <BookContainer size={{ '@bp1': 'bp1' }}>
        <h1>BOOKS STAND</h1>
        <BooksForm onSubmit={(e) => { e.preventDefault() }}>
          <h2>Book Name</h2>
          <input onChange={(e) => { setname(e.target.value) }} value={name} type="text" />
          <h2>Book Author</h2>
          <input onChange={(e) => { setauthor(e.target.value) }} value={author} type="text" />
          <Button onClick={() => save()}>Save</Button>
        </BooksForm>
      </BookContainer>
        <ToastContainer position="top-left" pauseOnHover={false} autoClose={3000} />
      <BookLogo size={{ '@bp1': 'bp1' }} alt='sadsa' src={bookImg} />
      <Footer />
    </Container>
  )
}

export default Home;

