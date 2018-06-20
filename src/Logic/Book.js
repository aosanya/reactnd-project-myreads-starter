var getShelf = (book, myReads) =>{
    const existingBook = myReads.filter((myread) => myread.book.id === book.id)
    return existingBook.length > 0 ? existingBook[0].shelf : 'none'
}

export {getShelf}