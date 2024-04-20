import './App.css';
import Person from './Person/Person';

function App() {

  // let visiblity = false;
  // const clickDetails = ()=> {
  //   visiblity = !visiblity;
  // }
  // const user = {
  //   title: 'test app',
  //   subtitle: 'this is subtitle',
  //   options: []
  // }

  // const formSubmit = (e) => {
  //   e.preventDefault()

  //   const option = e.target.elements.option.value;
  //   if (option){
  //     user.options.push(option);
  //     e.target.elements.option.value = '';
  //   }
  // }


  // const formHandler =(e) => {
  //   const option = e.target.elements.someData.value;
  //   if(option) {
  //     alert(option)
  //   };
  // };

  return (
    <div className="App">
      <Person />
      <Person name="akmal" age="22">My hobby is: </Person>
      {/* <form onSubmit={formSubmit}>
        <input type='text' name='option' />
        <button>add</button>
      </form> */}
      {/* <button onClick={clickDetails} >{visiblity ? 'hide details' : 'show details'}</button>
      {visiblity && (
        <div>
          <p>this is some details</p>
        </div>
      )} */}

      {/* <form onSubmit={formHandler}>
        <input type='text' name='someData'></input>
        <button>add</button>
      </form> */}
    </div>
  );
}

export default App;
