/* Destructuring del objeto React, que tiene diferentes elementos, como Component */
import React, { Component } from 'react';
// import Home from './components/Home/Home';
import Card from './components/Card/Card';
import './stylesheets/App.scss';
import {imageUrlBase} from './data/defaultImage';

// const INFOLANDING = {
//   title: 'Crea tu tarjeta de visita',
//   description: 'Crea mejores contactos profesionales de forma fácil y cómoda',
//   iconsArr: ['Diseña', 'Rellena', 'Comparte'],
//   btnText: 'comenzar',
//   teamName: 'ReactVengers'
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.imageLoad = React.createRef();
    this.reader = '';

    this.state = {
      userProfile: {
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: imageUrlBase,
        palette: ''
      },
      iconsStateArr: [{ id: 'email', isVisible: false }, { id: 'phone', isVisible: false }, { id: 'linkedin', isVisible: false }, { id: 'github', isVisible: false }]
    };
    this.updateUser = this.updateUser.bind(this);
    this.changeIconState = this.changeIconState.bind(this);
    this.changeColorPalette = this.changeColorPalette.bind(this);
    this.clickLoadImage = this.clickLoadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  updateUser(value, id) {
    this.setState(
      (prevState, props) => {
        const newUser = { ...prevState.userProfile };
        newUser[id] = value;
        return { userProfile: newUser };
      },
      () => {
        this.changeIconState(value, id);
      }
    );
  }

  changeIconState(value, id) {
    if (id !== 'name' && id !== 'job') {
      const newIconsArr = this.state.iconsStateArr.map(icon => {
        if (icon.id === id) {
          icon.isVisible = value ? true : false;
        }
        return icon;
      });
      this.setState({ iconsStateArr: newIconsArr });
    }
  }

  changeColorPalette (id){
    const newUser = {...this.state.userProfile};
    newUser.palette = id;
    this.setState({userProfile: newUser});
  }

  clickLoadImage () {
    this.imageLoad.current.click();
  }

  getImage(event) {
    const myFile = event.currentTarget.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(myFile);
    this.reader.onload = (event) => {
      const newUser = {...this.state.userProfile}
      newUser.photo = this.reader.result;
      this.setState({ userProfile: newUser });
    };
  }

  render() {
    const { userProfile, iconsStateArr } = this.state;

    return (
      // <Home teamName={INFOLANDING.teamName} btnText={INFOLANDING.btnText} iconsArr={INFOLANDING.iconsArr} description={INFOLANDING.description} title={INFOLANDING.title} />
      <Card user={userProfile} updateUser={this.updateUser} iconsStateArr={iconsStateArr} selectPalette={this.changeColorPalette} imageLoad={this.imageLoad} clickLoadImage={this.clickLoadImage} getImage={this.getImage} />
    );
  }
}

export default App;
