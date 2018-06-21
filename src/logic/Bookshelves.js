var getBookshelf = function (bookshelves, shelf){
    return bookshelves.filter((thisShelf) => thisShelf.shelf === shelf)
}


export {getBookshelf}