import React, {Component} from "react";
import HeaderFirstContent from "./header_firstContent.jsx";
import HeaderSecondContent from "./header_secondContent.jsx";

class Header extends Component {
    render() {
        return (
            <header>
                <HeaderFirstContent />
                <HeaderSecondContent />
            </header>
        )
    }
}

export default Header;