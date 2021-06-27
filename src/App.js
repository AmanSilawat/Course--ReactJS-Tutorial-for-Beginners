import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
// import Counter from './components/Counter';
import './components/styling-css/appStyles.css'
import styles from './components/styling-css/appStyles.module.css'
// import ParentComponent from './components/ParentComponent';
import NameList from './components/list-key-rendering/NameList';
import Stylesheet from './components/Stylesheet';
import Form from './components/form/Form';

// import LifecycleA from './components/mounting-lifecycle-methods/LifecycleA';
import LifecycleA from './components/updating-lifecycle-methods/LifecycleA';
import PureComp from './components/pure_components/PureComp';
// import ParentComp from './components/pure_components/ParentComp';

import Fragments from './components/Fragments';
import ParentComp from './components/memo/ParentComp';

import Refs from './components/refs_demo/Refs';
import RefsWithClass from './components/refs_demo/RefsWithClass';
import FRParentInput from './components/refs_demo/FRParentInput';
import Portal from './components/portals/Portal';

import Hero from './components/error-boundary/Hero'
import ErrorBoundary from './components/error-boundary/ErrorBoundary'
import ClickCounter from './components/higher-order-components/ClickCounter';
import HoverCounter from './components/higher-order-components/HoverCounter';

import ClickCounterTwo from './components/render-props/ClickCounterTwo';
import HoverCounterTwo from './components/render-props/HoverCounterTwo';
import Counter from './components/render-props/Counter';



function App() {
  return (
    <div className="App">
      {/* <Stylesheet primary={false} />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <Greet name="Aman" heroname="spider man">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Saleh" heroname="superman">
        <button>Action</button>
      </Greet>
      <Greet name="Sahil" heroname="batman" />

      <Welcome name="Sahil" heroname="batman" /> */}
      {/* <Hello /> */}

      {/* <Message /> */}

      {/* 17. listName rendering  */}

      {/* <NameList /> */}

      {/* <Form /> */}

      {/* Component Mounting Lifecycle Methods */}
      {/* Component updating Lifecycle Methods */}
      {/* < LifecycleA /> */}
      {/* Pure Component */}

      {/* <Fragments /> */}
      {/* <ParentComp /> */}

      {/* <Refs /> */}
      {/* <RefsWithClass /> */}
      {/* <FRParentInput /> */}

      {/* <Portal /> */}

      {/* <ErrorBoundary>
        <Hero heroName="batman" />
        <Hero heroName="superman" />
        <Hero heroName="joker" />
      </ErrorBoundary> */}

      {/* <ErrorBoundary>
        <Hero heroName="batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="superman" />
      </ErrorBoundary >

      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary> */}

      {/* <ClickCounter name="aman" />
      <HoverCounter /> */}

      {/* ------------------ */}
      
      <Counter render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      
      <Counter render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} />

      {/* &&&&&&&& */}

      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* ------------------ */}


    </div>
  );
}

export default App;
