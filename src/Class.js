import { v4 as uuidv4 } from 'uuid';

const noImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";

export default class book {
    constructor(name, author, src, id){
        this.id = id || uuidv4()
        this.name = name,
        this.author = author,
        this.src = src || noImg
    }
}