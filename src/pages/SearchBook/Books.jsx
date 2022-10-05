import React from 'react';
import NofavoritedImg from '../../assets/coração.png'
import FavoritedImg from '../../assets/coraçãoColor.png'
import ReactTooltip from 'react-tooltip';
import { Book, BookImg, ContainerBooks, FavoriteImg } from './style';
import { useSelector } from 'react-redux';

function BooksPage(props) {

    const state = useSelector(state => { return state.saveOrDelete })

    return (
        <ContainerBooks size={{
            '@bp1': 'bp1'
        }}>
            {
                props.data.map(b => {

                    const bookConfirm = state.find(value => value.id.includes(b.id))

                    return (
                        <Book key={b.id}>
                            <ReactTooltip />
                            <h3 style={{
                                fontSize: b.volumeInfo.title.length > 60 ? '14px' : null  
                            }}>{b.volumeInfo.title}</h3>
                            <p data-tip={b.volumeInfo.authors}>Author</p>
                            {b.volumeInfo.imageLinks ? (
                                <BookImg src={b.volumeInfo.imageLinks.smallThumbnail} alt={b.id}></BookImg>
                            ) :
                                <BookImg src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={b.id}></BookImg>}
                            <button onClick={() => props.favoriteFc(b)}>
                                <FavoriteImg src={
                                    bookConfirm ? FavoritedImg : NofavoritedImg
                                } alt="favorite" />
                            </button>
                        </Book>
                    )
                })
            }
        </ContainerBooks>
    )
}

export default BooksPage;