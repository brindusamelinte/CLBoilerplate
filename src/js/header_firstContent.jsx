import React, {Component} from "react";
import Logo from "./logo.jsx";
import HeaderFirstContentNavigation from "./header_firstContent_navigation.jsx";

class HeaderFirstContent extends Component {
    render() {
        return (
            <div className={"first_content"}>
                <Logo />
                <div className={"menu"}>
                    <button className={"menu__button"}><i className={"fas fa-bars"} /></button>
                </div>
                <HeaderFirstContentNavigation />
            </div>
        )
    }
}

export default HeaderFirstContent;