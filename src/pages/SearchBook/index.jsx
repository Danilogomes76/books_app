import React, { useState } from 'react';
import axios from 'axios';
import { Container, BookImgContainer, Button } from './style';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Books from './Books'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import daeneryImg from '../../assets/daenerys.svg'

function SearchBook() {
    const dispatch = useDispatch()
    const state = useSelector((state) => { return state.saveOrDelete })
    
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    function favorite(book) {
        const notify = () => toast(`"${book.volumeInfo.title}", foi adicionado a sua lista.`);
        const bookConfirm = state.find(value => value.id.includes(book.id))
        const thumbnail =  book.volumeInfo.imageLinks ?  book.volumeInfo.imageLinks.smallThumbnail : undefined
        dispatch({ type: 'FAVORITE', payload: [book.volumeInfo.title, book.volumeInfo.authors, thumbnail, book.id] })
        if(!bookConfirm){
            notify()
        }
    }

    async function submit() {
        const name = search.replace(/ /g, "")
        if (search.length > 0) {
            let url = await `https://www.googleapis.com/books/v1/volumes?q=${name}`
            axios.get(url)
                .then(response => {
                    response.data.totalItems ? setData(response.data.items) : []
                })
        }
    }

    return (
        <Container>
            <Header />
            <form onSubmit={(e) => { e.preventDefault() }} method="get">
                <input placeholder='Book name' type='text' onChange={e => { setSearch(e.target.value) }} value={search}></input>
                <Button onClick={() => submit()}>Search book</Button>
            </form>
            {data.length != 0 ? (
                <Books favoriteFc={favorite} data={data} />
            ) :
                <BookImgContainer size={{'@bp1': 'bp1'}}>
                    <img src={daeneryImg} alt='bookIcon'></img>
                </BookImgContainer>
            }
            <ToastContainer position="top-left" pauseOnHover={false} autoClose={3000} />
            <Footer />
        </Container>
    )
}

export default SearchBook;