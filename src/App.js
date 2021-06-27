import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
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
      <FRParentInput />


    </div>
  );
}

export default App;
