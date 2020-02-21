import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from "./header.jsx";
import Gallery from "./section_gallery.jsx";
import Portfolio from "./section_portfolio.jsx";
import Footer from "./footer.jsx";

// // import { library } from '@fortawesome/fontawesome-svg-core';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { fas, faMapMarked } from '@fortawesome/free-solid-svg-icons';


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Gallery />
                <Portfolio />
                <Footer />
            </>
        )
    }
}

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        <App/>,
        document.getElementById("app")
    )
});


// var mobile=window.matchMedia("screen and (max-width: 361px)");
//
// mobile.addEventListener("change",function(mobile){
//     if(mobile.matches){
//         var button=document.querySelector(".menu__button");
//         var nav=document.querySelector(".navigation");
//         button.addEventListener("click",function (){
//             nav.classList.toggle("active");
//         });
//     }
// });



