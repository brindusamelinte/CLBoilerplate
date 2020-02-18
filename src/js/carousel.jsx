// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
//
// import InfiniteCarousel from 'react-leaf-carousel';
//
//
// class App extends Component {
//     render() {
//         return (
//             <InfiniteCarousel
//                 breakpoints={[
//                     {
//                         breakpoint: 500,
//                         settings: {
//                             slidesToShow: 2,
//                             slidesToScroll: 2,
//                         },
//                     },
//                     {
//                         breakpoint: 768,
//                         settings: {
//                             slidesToShow: 3,
//                             slidesToScroll: 3,
//                         },
//                     },
//                 ]}
//                 dots={true}
//                 showSides={true}
//                 sidesOpacity={.5}
//                 sideSize={.1}
//                 slidesToScroll={4}
//                 slidesToShow={4}
//                 scrollOnDevice={true}
//             >
//                 <ul className={"gallery_list"}>
//                     <li className={"gallery_list_item"}>
//                         <h2>Paris</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>Nice</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>Cannes</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>Budapest</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>Granada</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>Milan</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                     <li className={"hide_cities,gallery_list_item"}>
//                         <h2>London</h2>
//                         <p>Clock:</p>
//                         <p>Weather:</p>
//                     </li>
//                 </ul>
//             </InfiniteCarousel>
//         )
//     }
// }
//
//
// document.addEventListener("DOMContentLoaded", function () {
//     ReactDOM.render(
//         <App/>,
//         document.getElementById("carousel")
//     )
// });
//
//
//
