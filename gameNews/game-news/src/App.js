import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>

            <Route exact path="/news/" element={<Main />} />
            <Route exact path="/news/:id" element={<Detail />} />
            <Route exact path="/news/:id/edit" element={<Update />} />

          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}
export default App;