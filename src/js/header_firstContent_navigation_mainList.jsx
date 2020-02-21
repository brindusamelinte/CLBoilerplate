import React, {Component} from "react";

class HeaderNavMainList extends Component {
    render() {
        return (
            <div className={"navigation__main__list"}>
                <ul className={"navigation__list"}>
                    <li className={"navigation__item"}><a className={"navigation__link"} href={"#"}>Home</a></li>
                    <li className={"navigation__item"}><a className={"navigation__link"} href={"#"}>About</a></li>
                    <li className={"navigation__item"}><a className={"navigation__link"} href={"#"}>Countries</a>
                    </li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Itinerary</a>
                    </li>
                    <li className="navigation__item hover"><a className="navigation__link" href="#">Transport
                        Maps</a>
                        <ul className="navigation__list__child">
                            <li className="navigation__item"><a className="navigation__link" href="#">Metro
                                map</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#">RER
                                and Transilien
                                map</a>
                            </li>
                            <li className="navigation__item"><a className="navigation__link" href="#">Bus
                                map</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#">Night
                                bus map</a></li>
                            <li className="navigation__item"><a className="navigation__link" href="#">Airport
                                access</a>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Fly
                        Tickets</a></li>
                </ul>
            </div>
        )
    }
}

export default HeaderNavMainList;