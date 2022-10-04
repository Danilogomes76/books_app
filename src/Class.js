import { v4 as uuidv4 } from 'uuid';

export default class book {
    constructor(name, author, src){
        this.id = uuidv4()
        this.name = name,
        this.author = author
        this.src = src
    }
}