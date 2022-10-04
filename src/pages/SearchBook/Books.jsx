import React from 'react';
import favoritedImg from '../../assets/coraçãoColor.png'
import ReactTooltip from 'react-tooltip';
import { Book, BookImg, ContainerBooks, FavoriteImg } from './style';

function BooksPage(props) {

    return (
        <ContainerBooks size={{
            '@bp1': 'bp1'
        }}>
            {
                props.data.map(b => {
                    return (
                        <Book key={b.id}>
                            <ReactTooltip />
                            <h3>{b.volumeInfo.title}</h3>
                            <p data-tip={b.volumeInfo.authors}>Author</p>
                            {b.volumeInfo.imageLinks ? (
                                <BookImg src={b.volumeInfo.imageLinks.smallThumbnail} alt={b.id}></BookImg>
                            ) :
                                <BookImg src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={b.id}></BookImg>}
                            <button onClick={() => props.favoriteFc(b)}>
                                <FavoriteImg src={favoritedImg} alt="favorite" />
                            </button>
                        </Book>
                    )
                })
            }
        </ContainerBooks>
    )
}

export default BooksPage;