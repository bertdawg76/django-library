export class Book {
    id: number;
    book_name: string;
    book_author: string;
    book_image: string;
    book_isbn: string;
    book_genre: string;
    book_shelf: string;
    is_available: boolean;
}

export class Shelf {

    id: number;
    genre: string;
    shelf_number: number;
    branch: number;

}

export class User {
    id: number;
    isLibrarian: any;
    user: number
}

export class myCheckout {
    book: any;
    id: any;

}

export class myReturn {
    checkouts: any;
    id: any;
    book: any;

}

export class myBooks {
    count: number;
    next: string;
    previous: any;
    results: any;

}

export class File {
    name: string;
    size: number;
    type: string;
}