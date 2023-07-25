import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Income</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<IncomePage/>} />
          <Route path="/expenses" element={<ExpensePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
