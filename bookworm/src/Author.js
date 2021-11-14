import { useParams } from 'react-router'
import './Author.css'
import Header from './Header';
import { Link } from 'react-router-dom';
import books from './db';

function Author() {

    let { url } = useParams();


    const aboutAuthor = books.filter(book => book.author.url === url);


    return (
        <div>
            <Header />
            <main>
                hellooo
            </main>
        </div>
    )
}

export default Author;