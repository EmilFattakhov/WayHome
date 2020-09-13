import React, { Component } from 'react'; // If you're using JSX you must import React at the top of the file
import PetIndexPage from './components/PetIndexPage'
import {
  BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';
import { Session } from './requests';
import PetCreatePage from './components/PetCreatePage';
import SignInPage from './components/SignInPage';
import NewUserPage from './components/NewUserPage';
import NavBar from './components/NavBar';
// import Navbar from './components/Navbar/Navbar'
import PetShowPage from './components/PetShowPage';
import Home from './components/mapsFeatures/Home';
import './App.css';
import Post from './components/createPDF/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
    
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }


  getCurrentUser() {
    Session.getCurrentUser()
      .then(user => {
        this.setState((state) => {
          return {
            user: user
          }
        })
      });
  }

  signIn(params, history) {
    Session.create(params)
      .then((res) => {
        history.push('/pets')
        this.getCurrentUser();
      }); 
  }

  signOut() {
    return Session.destroy();
    // return Session.destroy().then(() => this.reload());
  }

  render() {
    return (
        <BrowserRouter>
        <NavBar user={this.state.user} signout={this.signOut} />
        <div className='mainImage'></div>
        <Switch>
          <Route path='/posts' exact={true} component={Post}/>
          <Route path='/pets' exact={true} component={PetIndexPage}/>
          <Route path='/pets/new' component={PetCreatePage} />
          <Route path='/pets/:id' component={PetShowPage} currentUser={this.state.user}/>
          <Route path='/sign_in'
            render={
            (routeProps) => {
              return <SignInPage {...routeProps} signIn={this.signIn}/>
            }
          }/>
        <Route path='/users/new' component={NewUserPage} />
        <Route path='/map' component={ Home } />
        </Switch>
      </BrowserRouter>
      );
  }
}

export default App;
