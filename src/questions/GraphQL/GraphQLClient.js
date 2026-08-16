import {useEffect, useState } from "react";
import {getBooks, getBooksByAuthor} from "./GraphQLApi";

const GraphQLClient = () => {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState(null);
  const [booksOfAuthor, setBooksOfAuthor] = useState([]);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data.books)
        })
      .catch((error) => console.error(error));
  }, []);

  const handleAuthorClick = async (authorId, authorName) => {
    try {
      const data = await getBooksByAuthor(authorId)
      setBooksOfAuthor(data);
      setAuthor(authorName);
    } catch (error) {
      console.error(error);
    }
  };

  if(!books) return <p>Loading...</p>
  return <>
            <h1 >Welcome to OnlineBookShop!</h1>
            <ul>
                {books?.map((book) => 
                <>
                    <li key={book.id}>Book: {book.name} by <a href='#' onClick={e=>{
                        e.preventDefault();
                        handleAuthorClick(book.author.id, book.author.name)
                    }} >
                        {book.author.name}
                        </a>
                    </li>
                </>)}
            </ul>
            <br/>

            {author && <h3>List of books from  {author}</h3>}
            <ul>
                {booksOfAuthor?.map((book, index)=>{
                    return <li key={index}>{book.name}</li>
                })}
            </ul>
         </>
};

export default GraphQLClient;