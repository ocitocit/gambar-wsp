// Importing required components and modules from their respective files
import React, {Component} from 'react';
import InputForm from './components/InputForm';
import ListResult from './components/ListResult';
import NavBar from './components/NavBar';

export class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state object with default values
    this.state = {
      domain: '',
      img: '',
      extension: '',
      quantity: '',
      urls: [],
    };
    // Binding functions to the current context of the component
    this.handleChange = this.handleChange.bind(this);
    this.InputChange = this.InputChange.bind(this);
  }

  // Function to handle input element changes
  InputChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  // Function to handle form submission
  handleChange(e) {
    e.preventDefault();

    // Checking if all the fields are filled
    if (
      !this.state.img ||
      !this.state.urls ||
      !this.state.domain ||
      !this.state.extension ||
      !this.state.quantity
    ) {
      return alert('Isi dulu dong,baru bisa lanjut');
    }

    // Generating urls based on user input
    const urls = [];
    for (let i = 1; i <= this.state.quantity; i++) {
      const url = `https://${this.state.domain}/uploads/${this.state.img}${i}.${this.state.extension}`;
      urls.push(url);
    }
    // Updating the state with generated urls
    this.setState({urls});
  }

  render() {
    return (
      <>
        {/* Navbar Component */}
        <NavBar />
        {/* Main Content */}
        <main className="relative z-[1] mt-6 mb-16 grid grid-cols-1 gap-7 md:mt-0 md:mb-0 md:h-[70vh] md:grid-cols-2 md:gap-0">
          {/* Input Form Component */}
          <InputForm
            domain={this.state.domain}
            img={this.state.img}
            extension={this.state.extension}
            quantity={this.state.quantity}
            InputChange={this.InputChange}
            handleChange={this.handleChange}
          />
          {/* Result List Component */}
          <ListResult urls={this.state.urls} />
        </main>
      </>
    );
  }
}

export default App;
