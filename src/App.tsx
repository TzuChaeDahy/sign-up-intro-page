import styles from "./styles.module.css";
import Form from "./components/form/Form";
import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <main className={styles.main}>
      <Intro />
      <div className={styles.wrapper}>
        <Info />
        <Form />
      </div>
    </main>
  );
}

export default App;
