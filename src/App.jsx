// App.jsx
import './App.css';
import { ReactTyped } from "react-typed";
import { Circle2 } from 'react-preloaders';
import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  let [Loading, setLoading] = useState(true)
  let [show, setShow] = useState(false)

  setTimeout(() => {
    setLoading(false)
  }, 2000)
  // .......................................
  let handleClick = () => {
    setShow(!show)
  }
  AOS.init();
  return (
    <>

      <ScrollToTop smooth color="#6f00ff"

      />
      {Loading ?
        <Circle2 time={1800} />
        :
        <>
          <button onClick={handleClick}>
            {show == true ? <span>Hide</span>
              : <span>Show</span>}
          </button>
          {show == true ?
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quasi.</p>
            :
            " "
          }

          <div className="App">
            <h3   >Hello world</h3>
            <ReactTyped
              startWhenVisible
              strings={[
                'If <span style="color: red"><strong>startWhenVisible</strong></span> is true, it will start when visible in the DOM.'
              ]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </div>
          <section id='dark'>

          </section>
      <section   id='darrker' >
        <div data-aos="zoom-out-left" data-aos-delay="500" className="">
              <h1>welcome to this page </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eligendi atque pariatur culpa a iure cum modi, fuga accusantium neque, perspiciatis vitae consequuntur praesentium nemo tempore cumque laborum. Velit delectus accusamus repudiandae expedita asperiores, sunt animi blanditiis consequatur perspiciatis id soluta doloremque cupiditate cum nisi et cumque in eaque possimus neque consectetur ex! Magni quas laborum vel. Rem in, hic unde reiciendis adipisci at, quisquam harum praesentium soluta voluptas quo!</p>
        </div>
            </section>

        </>
      }
    </>
  );
}

export default App;
