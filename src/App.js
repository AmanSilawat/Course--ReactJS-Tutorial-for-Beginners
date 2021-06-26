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




    </div>
  );
}

export default App;
