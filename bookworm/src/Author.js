import { useParams } from 'react-router'
import './Author.css'
import Header from './Header';
import books from './db';

function Author() {

    let { url } = useParams();


    const aboutAuthor = books.filter(book => book.author.url === url);


    return (
        <div>
            <Header />
            <main>
                {aboutAuthor.map(book => (
                    <div key={book.id} className="wrapper-author">
                        <div className="cover"></div>
                        <img src={book.author.avatar} alt="" />
                        <h1>{book.author.name}</h1>
                        <p>{book.author.bio}</p>
                    </div>


                ))}

            </main>
        </div>
    )
}

export default Author;