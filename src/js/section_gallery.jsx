import React, {Component} from "react";
import cities from "./section_portfolio_ cards"

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            weather: {}
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({time: Date.now()})
        }, 1000);

        cities.forEach((city, index) => {
            const urlApi = `http://api.openweathermap.org/data/2.5/forecast?q=${city.weather}&units=metric&APPID=8b47e5495d1a0824adc3cae20d28252d`;
            fetch(urlApi).then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    console.log('Network error!');
                }
            }).then(weatherInfo => {
                this.setState({weather: {...this.state.weather, [city.name]: weatherInfo.list[0].main.temp}});
            }).catch(err => {
                console.log(err);
            })
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <section className="gallery">
                {/*<button type="button" className="arrow_left"><i className="fas fa-caret-left" /></button>*/}
                <ul>
                    {
                        cities.map((city, index) => {
                            return (
                                <li key={index} style={{color: "#5d228c"}}>
                                    <h2>{city.name}</h2>
                                    <p style={{margin: "10px"}}>Clock: {new Date().toLocaleString("en-US", {timeZone: city.timeZone})}</p>
                                    <p>Weather: {city.name in this.state.weather ? this.state.weather[city.name] : ""} &#730;C</p>
                                </li>)
                        })
                    }
                </ul>
                {/*<button type="button" className="arrow_right"><i className="fas fa-caret-right" /></button>*/}
            </section>
        )
    }
}

export default Gallery;
