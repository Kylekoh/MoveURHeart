import React, { Component, Fragment} from 'react';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';



class App extends Component {

  // componentDidMount() {
  //   let mainNavLinks = document.getElementsByClassName("nav-item");
  //   let mainSections = document.querySelectorAll("main section");
  //   console.log(mainNavLinks);
  //   console.log(mainSections);
  //   let lastId;
  //   let cur = [];
    
  //   window.addEventListener("scroll", () => {
  //     let fromTop = window.scrollY;
    
  //     mainNavLinks.map((link) => {
  //       let section = document.querySelector(link.hash);
    
  //       if (
  //         section.offsetTop <= fromTop &&
  //         section.offsetTop + section.offsetHeight > fromTop
  //       ) {
  //         link.classList.add("current");
  //       } else {
  //         link.classList.remove("current");
  //       }
  //     })
  //     }
  //    )
  // }

  handleScroll 

  render() {  
    return (
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>  
    );
  }
}

export default App;
