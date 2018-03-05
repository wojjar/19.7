// import React from 'react';
// import './App.css';
// const App = () => {
//   return (
//     <div className="App">
//       Tu będzie lista komentarzy!
//     </div>
//   );
// };
// export default App;


import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';
const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};
export default App;