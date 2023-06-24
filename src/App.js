import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
function App() {

  const pageSize = 9;
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
