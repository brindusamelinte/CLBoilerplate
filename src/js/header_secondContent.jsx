import React, {Component} from "react";
import SearchCities from "./header_secondContent_form.jsx";

class HeaderSecondContent extends Component {
    render() {
        return (
            <div className={"second_content"} style={{backgroundImage: "url('assets/images/background.jpeg')"}}>
                <div className={"container"}>
                    <h1>“Travel is the only thing you buy that makes you richer.”</h1>
                    <h3>The best tips to make tour journey the greatest adventure</h3>
                    <SearchCities />
                </div>
            </div>
        )
    }
}

export default HeaderSecondContent;