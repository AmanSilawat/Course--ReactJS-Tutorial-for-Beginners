import React, {useReducer} from 'react';
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

// ! context
// import ComponentC from './components/use-context/ex/ComponentC';
// export const UserContext = React.createContext();
// export const ThemeContext = React.createContext();

// ! useReducer
// import CounterOne from './components/use-reducer/simple-ex/CounterOne';
// import CounterTwo from './components/use-reducer/complex-ex/CounterTwo';
// import CounterThree from './components/use-reducer/multiple-reducer/CounterThree';

// ! useReducer - with context
// import ComponentA from './components/use-reducer/with-use-context/ComponentA';
// import ComponentB from './components/use-reducer/with-use-context/ComponentB';
// import ComponentC from './components/use-reducer/with-use-context/ComponentC';
// export const CounterContext = React.createContext();
// const initialState = 0;

// function reducer(state, action) {
//   console.log(state);
//   switch (action) {
//     case 'increment':
//       return state + 1;

//     case 'decrement':
//       return state - 1;

//     case 'reset':
//       return initialState;

//     default:
//       return state;
//   }
// }

// !useReducer - Fetching data
import DataFetchingOne from './components/use-reducer/data-fetching/DataFetchingOne';
import DataFetchingTwo from './components/use-reducer/data-fetching/DataFetchingTwo';


import ParentComponent from './components/use-callback/ParentComponent';
import Counter from './components/use-memo/Counter';
import FocusInput from './components/use-ref/FocusInput';
import SecondUseCase from './components/use-ref/SecondUseCase';
import DocTitleOne from './components/custom-hook/doc-title/DocTitleOne';
import DocTitleTwo from './components/custom-hook/doc-title/DocTitleTwo';
import CounterOne from './components/custom-hook/counter/CounterOne';
import CounterTwo from './components/custom-hook/counter/CounterTwo';
import UserForm from './components/custom-hook/input/UserForm';



function App() {
  // ! context
  // return (
  //   <div>
  //     <UserContext.Provider value="aman">
  //       <ThemeContext.Provider value="purple">
  //         <ComponentC />
  //       </ThemeContext.Provider>
  //     </UserContext.Provider>
  //   </div>
  // );

  
  // ! useReducer
  // const [counter, dispatch] = useReducer(reducer, initialState)
  return (
    // <CounterOne />
    // <CounterTwo />

    // !useReducer - multiple reducer
    // <CounterThree />

    // !useReducer - with context
    // <CounterContext.Provider value={{ counter, dispatch }}>
    //   count : {counter}
    //   <ComponentA />
    //   <ComponentB />
    //   <ComponentC />
    // </CounterContext.Provider>

    // !useReducer - Fetching data
    // <DataFetchingOne />
    // <DataFetchingTwo />


    // ! useCallback
    // <ParentComponent />

    // ! useMemo
    // <Counter />

    // ! useRef
    // <FocusInput />
    // <SecondUseCase />

    // ! custom hoot

    // <div>
    //   <DocTitleOne />
    //   <DocTitleTwo />
    // </div>

    // <div>
    //   <CounterOne />
    //   <CounterTwo />
    // </div>

    <div>
      <UserForm />
    </div>


  )
  
}

export default App;
