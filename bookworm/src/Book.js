import { Link } from 'react-router-dom';
import Header from './Header';
import books from "./db";
import { useParams } from 'react-router';
import './Book.css'


export default function Book() {

    let { bookUrl } = useParams();


    const aboutBook = books.filter(book => book.url === bookUrl);


    return (
        <div>
            <Header />
            <main>
                <div id="bookWrapper">
                    {aboutBook.map(book => (
                        <div className="container2">
                            <div class='coverImg'>
                                <img src={book.cover} alt="" />
                            </div>

                            <div class="details">
                                <h1>{book.title}</h1>
                                <Link class="author" to={`/book/${book.url}`}> {book.author.name}
                                </Link>
                                <p>{book.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}