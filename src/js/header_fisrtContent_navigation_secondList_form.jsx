import React, {Component} from "react";

const validEmailRegEx = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class NavSecondListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: "",
            messageSent: "",
            noChange: true,
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({noChange: false, [e.target.name]: e.target.value});
    };

    isValid() {
        let {email, noChange} = this.state;
        if (noChange || !validEmailRegEx.test(email)) {
            return false;
        } else {
            return true;
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        let {email} = this.state;
        let error = validEmailRegEx.test(email) ? "" : "Email is not valid!";
        if (this.isValid()) {
            this.setState({email: "", error: error, messageSent: "Thank you for subscribing!"});
        } else {
            this.setState({error: error, messageSent: error});
        }
    };

    render() {
        return (
            <>
                <form name={"subscribeForm"} onSubmit={this.handleSubmit}>
                    <label htmlFor={"email"}>Subscribe now:</label>
                    <input id={"email"} type={"text"} name={"email"} placeholder={"Email Address"}
                           value={this.state.email} onChange={this.handleChange}/>
                    <input style={{
                        backgroundColor: "#c391e0",
                        border: "1px solid #c391e0",
                        borderRadius: "5px",
                        marginTop: "10px",
                        height: "25px"
                    }} type={"submit"} value={"Submit"}/>
                </form>
                <p>{this.state.messageSent}</p>
            </>
        )
    }
}

export default NavSecondListForm;