import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />
);

const books = [
  {
    author: 'Michael Kaplan ',
    title: 'Betty Bunny Loves Easter ',
    img: 'https://m.media-amazon.com/images/I/51CuIzzfbcL._SY498_BO1,204,203,200_.jpg',
  },
  {
    author: 'Little Sprout Press ',
    title: 'I Spy Easter Book For Kids Ages 2-5',
    img: 'https://m.media-amazon.com/images/I/51u6Mrp0QsL._SY498_BO1,204,203,200_.jpg',
  }
];

const bookTitles = ['Easter Stuufer', 'Ester Egg', 'Easter Bunny'];
const booktitle = bookTitles.map((title) => {
  console.log(title);
  return<section className="bookTitles"> 
    <h3>{title}</h3>

  </section>
})

const firstBook = {
  author: 'Adam Wallace',
  title: 'How to Catch the Easter Bunny',
  img: 'https://m.media-amazon.com/images/I/51tBy6geZ0L._SY498_BO1,204,203,200_.jpg',
};

const secondBook = {
  author: "Marilyn Sadler ",
  title: "It's Better Being a Bunny",
  img: 'https://m.media-amazon.com/images/I/51kn0-raRCS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
};


function BookList(){
  return (
    <section className='booklist'>
      <Book2 title="Hello World" price={23} img={img}>
      <p>lorem3</p>
      <h2>Boyana</h2></Book2>

      <Book author={firstBook.author} 
        title={firstBook.title}
        img={firstBook.img} />
      <Book author={secondBook.author} 
      title={secondBook.title}
      img={secondBook.img} />

      <Book3 author={author} 
      title={title}
      img={img}/>

    {booktitle}
    </section>

  )
}

const author = 'John Moore';
const title = 'Interesting facts';
const img = 'https://m.media-amazon.com/images/I/51VyW1qRmSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';



const Image = () => <img src='https://m.media-amazon.com/images/I/51VyW1qRmSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img>;
const Title = () => <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
const Author = () => <h4>by Dav Pilkey </h4>;




const Book = (props) => {
  console.log(props);
  return(
    <article className='book'>
      <img src={props.img} alt ={title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}



const Book2 = (props) => {
  console.log(props);
  const { img, title, author, price, children } =props;
  return(
    <article className='book'>
      <img src={img} alt ={title} />
      <h2>{title}</h2>
      {children}
      <h4>{author}</h4>
      <p>{price}</p>
      
    </article>
  )
}

const Book3 = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt ={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

