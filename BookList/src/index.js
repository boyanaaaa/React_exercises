import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />
);

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book2 title="Hello World" price={23}/>
    
    </section>
  )
}

const author = 'John Moore';
const title = 'Interesting facts';
const img = 'https://m.media-amazon.com/images/I/51VyW1qRmSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg';

const Book = () => {
  return(
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src='https://m.media-amazon.com/images/I/51VyW1qRmSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'></img>;
const Title = () => <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
const Author = () => <h4>by Dav Pilkey </h4>;


const Book2 = (props) => {
  console.log(props);
  return(
    <article className='book'>
      <img src={img} alt ={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{props.price}</p>
    </article>
  )
}








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
