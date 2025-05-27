 // App.jsx
import './App.css';
import { ReactTyped } from "react-typed";
import { Circle2 } from 'react-preloaders';
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
    <ScrollToTop smooth color="#6f00ff" 
    
    
    />
      <Circle2 time={1800} />
      <div className="App">
        <h3>Hello world</h3>
        <ReactTyped
          startWhenVisible
          strings={[
            'If <span style="color: red"><strong>startWhenVisible</strong></span> is true, it will start when visible in the DOM.'
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
          smartBackspace
          showCursor
          attr="innerHTML" 
        />
      <section id='dark'>

      </section>
      </div>
    </>
  );
}

export default App;
