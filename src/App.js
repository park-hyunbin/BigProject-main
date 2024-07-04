import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/NavBar';
import Home from './routes/Home';
import External from './routes/External';
import External1 from './routes/External1';
import External2 from './routes/External2';
import Internal2 from './routes/Internal2';
import Internal from './routes/Internal';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Loading from './components/Loading';
import CCTVGrid from './components/CCTVGrid';
import Sidebar from './components/Sidebar';
import PasswordReset from './routes/Forgot';
import './App.css';
import './Transitions.css';

const AnimatedRoutes = () => {
  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={500}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<PasswordReset />} />
          <Route path="/external/*" element={<External />}>
            <Route path="section1" element={<External1 />} />
            <Route path="section2" element={<External2 />} />
          </Route>
          <Route path="/internal/*" element={<Internal />}>
            <Route path="section1" element={<CCTVGrid />} />
            <Route path="section2" element={<Internal2 />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          {isLoading ? <Loading /> : <AnimatedRoutes />}
        </div>
      </div>
    </Router>
  );
};

export default App;
