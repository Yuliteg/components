import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropDownPage';
import Sidebar from './components/Sidebar';
import Route from './components/Route';

function App() {

  return (
    <div className='container mx-auto grid grid-cols-6 gap-6 mt-6'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
