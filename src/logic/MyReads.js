var removeBook = (myReads, book) =>{
    return myReads.filter((myread) => myread.book.id !== book.id)
}

export {removeBook}