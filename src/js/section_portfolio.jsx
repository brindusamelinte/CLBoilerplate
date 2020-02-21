import React, {Component} from "react";
import PortfolioCards from "./section_portfolio_cards.jsx";

class Portfolio extends Component {
    render() {
        return (
            <section className={"portfolio"}>
                <div className={"container"}>
                    <div className={"portfolio__header"}>
                        <h2>Explore Best Cities</h2>
                        <p>Feel free to look around</p>
                    </div>
                    <PortfolioCards />
                </div>
            </section>
        )
    }
}

export default Portfolio;