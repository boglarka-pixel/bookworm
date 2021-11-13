import { Link } from 'react-router-dom';
import Header from './Header';
import books from "./db";

import { useState } from 'react';


export default function Book() {



    return (
        <div>
            <Header />
            <main>
                <div id="wrap">
                    <div className="container">
                        {books.map(book => (
                            <Link to='/'>
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
    );
}