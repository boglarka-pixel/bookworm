import books from './db.js';

import './App.css';

function Book({ cover, name, title }) {

    return (
        <div className="container">
            <a href='/'>
                <article>
                    <img src={cover} alt="" />
                    <h2>
                        <span className="author-name">{name}</span>
                        <br />
                        <span className="book-title">{title}</span>
                    </h2>
                </article>
            </a>
        </div>


    )
}

export default Book;