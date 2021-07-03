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
import ConditionallyRunEffects from './components/use-effect/ConditionallyRunEffects';
import MouseContainer from './components/use-effect/cleanup/MouseContainer';
import IntervalHookCounter from './components/use-effect/incorrect-dependency/IntervalHookCounter';
import IntervalClassCounter from './components/use-effect/incorrect-dependency/IntervalClassCounter';
import DataFetchingPostButton from './components/fetching-data with-use-effect/DataFetchingPostButton';

import ComponentC from './components/use-context/ex/ComponentC';
export const UserContext = React.createContext();
export const ThemeContext = React.createContext();


function App() {
  return (
    <div>
      <UserContext.Provider value="aman">
        <ThemeContext.Provider value="purple">
          <ComponentC />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
