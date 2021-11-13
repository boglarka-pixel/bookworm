import books from './db.js';
import Header from './Header';
import './Main.css';
import { Link } from 'react-router-dom';



function Main() {



    return (
        <div>
            <Header />
            <main>
                <div id="wrap">
                    <div className="container">
                        {books.map(book => (
                            <Link to={`/book/${book.url}`}>
                                <article>
                                    <img src={book.cover} alt="" />
                                    <h2>
                                        <span className="author-name">{book.author.name}</span>
                                        <br />
                                        <span className="book-title">{book.title}</span>

                                    </h2>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Main;


/*

                    {books.map(book => (
                        <a href='/' key={book.id} >
                            <article>
                                <img src={book.cover} alt="" />
                                <h2>
                                    <span className="author-name">{book.author.name}</span>
                                    <br />
                                    <span className="book-title">{book.title}</span>
                                </h2>
                            </article>
                        </a>
                    ))}

*/