import classes from "./App.module.css";
import './App.css';
import Daily from './Pages/Daily/Daily';

function App() {
  return (
    <div>
      <div className={classes.screen}>
          <div className={classes.frame}>
            <Daily />
          </div>
      </div>
    </div>
  );
}

export default App;
