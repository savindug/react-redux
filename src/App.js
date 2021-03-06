import './App.css';
import Posts from './components/posts/Posts';
import PostForm from './components/posts/PostForm';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header></header>
        <PostForm />
        <hr></hr>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
