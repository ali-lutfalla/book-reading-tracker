import './App.css'

// src/App.jsx

const App = () => {

  const books = [
    {name:'arthur', red: true},
    {name:'ali', red: true},
    {name:'lauther', red: false},
    {name:'Jones', red: true},

  ]

  return (
    <>
    <h1>books:</h1>
    <ul>
      {books.map((book, index) => (
        <li key={index} className= {book.red ? 'completed' : 'not-completed'}>{book.name}</li>
      ))}
    </ul>
    </>
  );
}

export default App