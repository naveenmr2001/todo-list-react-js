import './App.css';
import Heading from './components/Heading/Heading';
import { Route, Routes } from 'react-router-dom';
import ToDoPage from './components/Pages/ToDoPage';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path='/' element={<ToDoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
