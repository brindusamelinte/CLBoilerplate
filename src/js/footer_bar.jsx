import React, {Component} from "react";
import FooterBarSocial from "./footer_bar_social.jsx";

class FooterBar extends Component{
    render() {
        return (
            <div className={"footer__bar"}>
                <div className={"container"}>
                    <p className={"long"}>Copyright 2020 Travel With Me | All Right Reserved.</p>
                    <p className={"short"}>&copy;2020</p>
                    <FooterBarSocial />
                </div>
            </div>
        )
    }
}

export default FooterBar;