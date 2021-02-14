import './App.css';
import CreateItem from './CreateItem';
import ListItems from './ListItems';
import { ItemsContextProvider } from './ItemsContext';
import React from 'react';
import CompletedItems from './CompletedItems';

function App() {
  return (
    <ItemsContextProvider>
      <div className='App'>
        <h1>Rzeczy zwrócone do sklepów</h1>
        <CreateItem />
        <ListItems />
        <CompletedItems />
      </div>
    </ItemsContextProvider>
  );
}

export default App;
