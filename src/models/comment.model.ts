
export class Comment {
    creationDate: string;
    author: string;
    content: string;
    isSoftDeleted?: boolean;
    constructor(creationDate: string,
        author: string,
        content: string) {
        this.creationDate = creationDate;
        this.author = author;
        this.content = content;
        this.isSoftDeleted = false;
    }

}