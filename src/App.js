// // import './App.css';
// // import React, { useState } from 'react';
// // import About from './components/About';
// // import AlertComponent from './components/Alert';
// // import Navbar from './components/Navbar';
// // import TextForm from './components/TextForm';
// // import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

// // function App() {
// //   const [mode, setMode] = useState('dark');
// //   const [alertState, setAlertState] = useState(null);

// //   const showAlert = (message, type) => {
// //     setAlertState({
// //       msg: message,
// //       type: type
// //     });
// //     setTimeout(() => {
// //       setAlertState(null);
// //     }, 1500);
// //   };

// //   const toggleMode = () => {
// //     if (mode === 'light') {
// //       setMode('dark');
// //       document.body.style.backgroundColor = 'grey';
// //       showAlert("Dark mode has been enabled", "success");
// //       document.title = 'MyWebsite - Dark mode';
// //     } else {
// //       setMode('light');
// //       document.body.style.backgroundColor = 'white';
// //       showAlert("Light mode has been enabled", "success");
// //       document.title = 'MyWebsite - Light mode';
// //     }
// //   };

// //   return (
// //     <Router>
// //       <Navbar title="My Website" abouttext="About us" mode={mode} toggleMode={toggleMode} />
// //       <AlertComponent alert={alertState} />
// //       <div className="container my-3">
// //         <Switch>
// //           <Route exact path="/about">
// //             <About />
// //           </Route>
// //           <Route exact path="/">
// //             <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import './App.css';
// import React, { useState } from 'react';
// import About from './components/About';
// import AlertComponent from './components/Alert';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('dark');
//   const [alertState, setAlertState] = useState(null);

//   const showAlert = (message, type) => {
//     setAlertState({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlertState(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'grey';
//       showAlert("Dark mode has been enabled", "success");
//       document.title = 'MyWebsite - Dark mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//       document.title = 'MyWebsite - Light mode';
//     }
//   };

//   return (
//     <Router>
//       <Navbar title="My Website" abouttext="About us" mode={mode} toggleMode={toggleMode} />
//       <AlertComponent alert={alertState} />
//       <div className="container my-3">
//         <Route exact path="/about" component={About} />
//         <Route exact path="/" render={(props) => (
//           <TextForm {...props} showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
//         )} />
//       </div>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import AlertComponent from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alertState, setAlertState] = useState(null);

  const showAlert = (message, type) => {
    setAlertState({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertState(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'MyWebsite - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'MyWebsite - Light mode';
    }
  };

  return (
    <Router>
      <Navbar title="My Website" abouttext="About us" mode={mode} toggleMode={toggleMode} />
      <AlertComponent alert={alertState} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;