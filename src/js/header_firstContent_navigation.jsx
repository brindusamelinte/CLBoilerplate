import React, {Component} from "react";
import HeaderNavMainList from "./header_firstContent_navigation_mainList.jsx";
import HeaderNavSecondList from "./header_firstContent_navigation_secondList.jsx";

class HeaderFirstContentNavigation extends Component {
    render() {
        return (
            <nav className={"navigation"}>
                <HeaderNavMainList />
                <HeaderNavSecondList />
            </nav>
        )
    }
}

export default HeaderFirstContentNavigation;