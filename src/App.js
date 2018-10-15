import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css'; 

class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        sillyFirstName: "Enter your first name in the text box",
        sillyLastName: "Enter your last name in the text box"
    }
  }
  

  updateA(event) {
    this.getName({firstName: event.target.value})
  }

  updateB(event) {
    this.getName({lastName: event.target.value})
  }

  getName(newState) {

  let firstNameInt = {
      a: 'Stinky', b: 'Lumpy', c: 'Buttercup', d: 'Gidget', e: 'Crusty',
      f: 'Greasy', g: 'Fluffy', h: 'Cheeseball', i: 'Chim-Chim', j: 'Poopsie',
      k: 'Flunky', l: 'Booger', m: 'Pinky', n: 'Zippy', o: 'Goober',
      p: 'Doofus', q: 'Slimy', r: 'Loopy', s: 'Snotty', t: 'Falafel',
      u: 'Donkey', v: 'Squeezit', w: 'Oprah', x: 'Skipper', y: 'Dinky', z: 'Zsa-Zsa'
    };
  
  let firstLastInt = {
      a: 'Diaper', b: 'Toilet', c: 'Giggle', d: 'Bubble', e: 'Girdle', f: 'Barf', g: 'Lizard',
      h: 'Waffle', i: 'Cootie', j: 'Monkey', k: 'Potty', l: 'Liver', m: 'Banana', n: 'Rhino',
      o: 'Burger', p: 'Hamster', q: 'Toad', r: 'Gizzard', s: 'Pizza', t: 'Gerbil',
      u: 'Chicken', v: 'Pickle', w: 'Chuckle', x: 'Tofu', y: 'Gorilla', z: 'Stinker' 
    };

  let secondLastInt = {
      a: 'Head', b: 'Mouth', c: 'Face', d: 'Nose', e: 'Tush', f: 'Breath', g: 'Pants',
      h: 'Shorts', i: 'Lips', j: 'Honker', k: 'Butt', l: 'Brain', m: 'Tushie', n: 'Chunks',
      o: 'Hiney', p: 'Biscuits', q: 'Toes', r: 'Buns', s: 'Fanny', t: 'Sniffer',
      u: 'Sprinkles', v: 'Kisser', w: 'Squirt', x: 'Humperdinck', y: 'Brains', z: 'Juice'
    }
  
    this.setState((state) => {
      let firstName = state.firstName;
      let lastName = state.lastName;
      let processedFirstName; //Same as null or undefined
      let processedLastName;
      if(newState.firstName !== undefined) {
        firstName = newState.firstName
      }

      if(newState.lastName !== undefined) {
        lastName = newState.lastName
      }

      if(firstName === undefined) {
        processedFirstName = "(Enter your first name here)"
      }
      else {
        let firstChar = firstName.split("")[0];
        processedFirstName = firstNameInt[firstChar.toLowerCase()];
        console.log ("firstName: " + processedFirstName)
      }

      if(lastName === undefined) {
        processedLastName = "(Enter your last name here)"
      }
      else {
        let lastArray = lastName.split("");
        let firstCharLast = lastArray[0];
        let lastCharLast = lastArray[lastArray.length - 1] //Conventions due to first index always equalling [0]
        processedLastName = firstLastInt[firstCharLast.toLowerCase()];
        console.log("lastNamePrefix: " + processedLastName);
        processedLastName = processedLastName + secondLastInt[lastCharLast.toLowerCase()];
        console.log("fullLastName: " + processedLastName);
      }
      
      return {
        firstName: firstName,
        lastName: lastName,
        sillyFirstName: processedFirstName,
        sillyLastName: processedLastName
      }
  })
}
  

  render () {
    return (
      <div>
        <h1>Captain Underpants New Swissland Name Generator!</h1>
        <h2>----------------------------------------------------------------------------------</h2>
        <h3>Enter the initials of your name in the textboxes below to determine your new name!</h3>
        <p>{this.state.sillyFirstName}</p>
        <Widget updateA = {this.updateA.bind(this)}/>
        <p>{this.state.sillyLastName}</p>
        <Pidget updateB = {this.updateB.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" 
         name="First Letter of First Name"
         defaultValue="Enter letter from A-Z"
         onChange={props.updateA}/>

const Pidget = (props) =>
   <input type="text"
          name="First and Last Letters of Surname"
          defaultValue="Enter letter from A-Z"
          onChange={props.updateB}/>


export default App;
