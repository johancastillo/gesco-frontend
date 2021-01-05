import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// ***** Components *****
import Menu from './components/menu/Menu';
import TopBar from './components/top-bar/TopBar';
import Graphics from './components/graphics/Graphics';
import Table from './components/table/Table';


function App() {
  return (
    <>
      <TopBar />
      <div className="conatiner-fluid">
        <div className="row">
          <Menu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Graphics />
              <Table />
            </main>
        </div>
      </div>
    </>
  );
}

export default App;
