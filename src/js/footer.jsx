import React, {Component} from "react";

import FooterBar from "./footer_bar.jsx";
import FooterContact from "./footer_contact.jsx";

class Footer extends Component {
    render() {
        return (
            <footer>
                <FooterContact/>
                <FooterBar/>
            </footer>
        )
    }
}

export default Footer;