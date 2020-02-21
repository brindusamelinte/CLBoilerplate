import React, {Component} from "react";

import Logo from "./logo.jsx";
import FooterContactForm from "./footer_contact_form.jsx";

class FooterContact extends Component {
    render() {
        return (
            <div className={"footer__contact"}>
                <div className={"container"}>
                    <div className={"footer__contact__logo"}>
                        <Logo />
                        <h4>Thanks for your interest in Travel With Me. For more information, feel free to get in
                            touch.</h4>
                    </div>
                    <FooterContactForm />
                </div>
            </div>
        )
    }
}

export default FooterContact;