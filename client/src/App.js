import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './app/pages/home';
import CreateForm from './app/pages/forms/create';
import AnswerForm from './app/pages/forms/answer';

function App() {
  return (
    <Router basename={`/`}>
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route exact path='/forms/create' element={< CreateForm />} />
          <Route exact path='/forms/:id' element={< AnswerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
