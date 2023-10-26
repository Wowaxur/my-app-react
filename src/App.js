import logo from './logo.svg';
import './App.css';

const App = () => {
  return ( <div>
          <Tech />
          <Header />
          <vldWow />
      </div>
);
}
const Header = () =>{
    return(<div><center>
            Hello, it VLD <a href="https://github.com/Wowaxur" target='_blank'>WOWAXUR</a>
        </center>
    </div>
    );
}

const Tech = () => {
   return( <div className="App">
        <ul>
            <li>Simple HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
    </div>);
}
const vldWow = () => {
    return(<div>
            Hello, it VLD WOWAXUR
        </div>
    );
 }


export default App;
// function Welcome(){
//     return <h1>Hello, it VLD WOWAXUR</h1>;
// }
// const Welcome = () => {
//     return <h1>Hello, it VLD WOWAXUR</h1>
// }
// function App (){
//     return(<div>
//         <a>Home </a>
//
//         <a>Message</a>
//     </div>)
// }