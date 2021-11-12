import books from './db.js';
import Book from './Book';


function Main() {

    return (
        <main>
            <div id="wrap">
                <div className="container">



                    {books.map(book => (
                        <Book
                            key={book.id}
                            title={book.title}
                            cover={book.cover}
                            name={book.author.name}
                        />
                    ))}

                </div>
            </div>

        </main>

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