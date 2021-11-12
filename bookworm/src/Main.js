import books from './db.js';


function Main() {

    return (
        <main>
            <div class="container">


                {books.map(book => (
                    <a>
                        <article>
                            <img src={book.author.avatar} alt="" />
                            <h2>
                                <span class="author-name">{book.author.name}</span>
                                <br />
                                <span class="book-title">{book.title}</span>
                            </h2>
                        </article>
                    </a>
                ))}

            </div>
        </main>

    )
}

export default Main;