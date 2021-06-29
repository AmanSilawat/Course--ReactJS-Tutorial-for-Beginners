import React from 'react';
import PostList from './components/get-request/PostList'
import PostForm from './components/post-request/PostForm';
import HookCounter from './components/use-state-hook/HookCounter';
import HookCounterTwo from './components/use-state-previous-state/HookCounterTwo';
import HookCounterTree from './components/use-state-object/HookCounterThree';


function App() {
  return (
    <div>
      <HookCounterTree />
    </div>
  );
}

export default App;
