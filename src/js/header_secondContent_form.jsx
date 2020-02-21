import React, {Component} from "react";
import Autocomplete from "react-autocomplete";
import cities from "./section_portfolio_ cards";

class SearchCities extends Component {
    constructor(props) {
        super(props);
        this.state= {
            search:"",
            currentCity:""
        }
    }

    render() {
        return (
            <form className={"search__cities"}>
                <div className={"search"}><i className={"fas fa-map-marker-alt"} /></div>
                {/*<input className={"search"} type={"text"} name={"cities"} value={this.state.search} onChange={this.handleChange} placeholder={"Location"}/>*/}
                <Autocomplete
                    getItemValue={(item) => item.name}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    items={cities}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.name}
                        </div>
                    }
                    value={this.state.currentCity}
                    onChange={(e) => this.setState({currentCity : e.target.value}) }
                    onSelect={(val) => this.setState({currentCity : val})}
                />
                <a href={"#"+this.state.currentCity}><button className={"search"} type={"button"} value={"Search"} ><i className={"fa fa-search"} /></button></a>
            </form>
        )
    }
}

export default SearchCities;