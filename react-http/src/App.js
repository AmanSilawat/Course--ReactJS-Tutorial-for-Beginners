import React from 'react';
import PostList from './components/get-request/PostList'
import PostForm from './components/post-request/PostForm';
import HookCounter from './components/use-state-hook/HookCounter';
import HookCounterTwo from './components/use-state-previous-state/HookCounterTwo';

function App() {
  return (
    <div>
      <HookCounterTwo />
    </div>
  );
}

export default App;
