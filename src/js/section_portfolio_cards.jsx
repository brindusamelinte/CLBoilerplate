import React, {Component} from "react";
import cities from "./section_portfolio_ cards";


class PortfolioCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: false
        }
    }

    render() {
        return (
            <div className={"portfolio__cards"}>
                {
                    cities.map((city, index) => {
                        const className = this.state.selectedIndex === index ? "portfolio__card__shown" : "portfolio__card";
                        const styleImg = this.state.selectedIndex === index ? {} : {backgroundImage: "url(" + city.urlImg + ")"};

                        return (
                            <div className={className} style={styleImg} key={index}
                                 onClick={() => {
                                     const selected = this.state.selectedIndex === index ? false : index;
                                     this.setState({selectedIndex: selected})
                                 }}>
                                <h1 id={city.name}>{city.name}</h1>
                                <h4> {city.state}</h4>
                                <div>
                                    {this.state.selectedIndex === index && <img className={"imgCity"} src={city.urlImg}/>}
                                    <div>
                                        <iframe className={"mapImg"}
                                                src={city.map}
                                                frameBorder={"0"} style={{border: 0}}
                                                allowFullScreen={""}/>
                                    </div>
                                    <p> {city.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PortfolioCards;