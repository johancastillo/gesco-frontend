import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// ***** Components *****
import Menu from './components/menu/Menu';
import TopBar from './components/top-bar/TopBar';


function App() {
  return (
    <>
      <TopBar />
      <Menu />
    </>
  );
}

export default App;
