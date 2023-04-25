import classes from "./App.module.css";
import './App.css';
import Daily from './Pages/Daily/Daily';

function App() {
  return (
    <div>
      <div className={classes.screen}>
          <header className={classes.header}></header>
          <body className={classes.body}>
            <aside className={classes.aside}></aside>
            <section className={classes.frame}>
              <Daily />
            </section>
          </body>
      </div>
    </div>
  );
}

export default App;
