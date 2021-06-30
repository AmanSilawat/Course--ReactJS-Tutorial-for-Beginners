import React from 'react';
import PostList from './components/get-request/PostList'
import PostForm from './components/post-request/PostForm';
import HookCounter from './components/use-state-hook/HookCounter';
import HookCounterTwo from './components/use-state-previous-state/HookCounterTwo';
import HookCounterTree from './components/use-state-object/HookCounterThree';
import HookCounterFour from './components/use-state-array/HookCounterFour';
import HookCounterOne from './components/use-effect/HookCounterOne';
import DataFetching from './components/fetching-data with-use-effect/DataFetching';
import DataFetchingPost from './components/fetching-data with-use-effect/DataFetchingPost';


function App() {
  return (
    <div>
      <DataFetchingPost />
    </div>
  );
}

export default App;
