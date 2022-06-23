import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './app/pages/home';
import CreateForm from './app/pages/forms/create';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/form/create' element={< CreateForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
