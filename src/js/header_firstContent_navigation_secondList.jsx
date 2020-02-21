import React, {Component} from "react";

import lang from "./header_fisrtContent_navigation_secondList";
import NavSecondListForm from "./header_fisrtContent_navigation_secondList_form.jsx";

class HeaderNavSecondList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: "none"
        }
    }

    render() {
        const divStyle={
            display: this.state.style,
            position: "absolute",
            top: "60px",
            right: "-80px",
            backgroundColor: "#5d228c",
            width: "270px",
            height: "130px",
            padding: "10px",
            borderRadius: "10px"
        };
        return (
            <div className="navigation__secondary__list">
                <ul className="navigation__list">
                    <li className="navigation__item hover">
                        <i className="fas fa-globe-europe"/>
                        English
                        <ul className="navigation__list__child">
                            {
                                lang.map((lang, index) => {
                                    return <li key={index} className={"navigation__item"}>{lang}</li>
                                })
                            }
                        </ul>
                    </li>
                    <li className="navigation__item subscribe">
                        <i className="fas fa-paper-plane"/>
                        <span onClick={() => {
                            const isDisplayed = this.state.style === "block" ? "none" : "block";
                            this.setState({style: isDisplayed})
                        }}>Subscribe</span>
                        <div style={divStyle}>
                            <NavSecondListForm/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderNavSecondList;