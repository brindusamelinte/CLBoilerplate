import React, {Component} from "react";

const validEmailRegEx = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class FooterContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email: "",
            subject: "",
            message: "",
            noChange:true,
            messageSuccess: "",
            errors: {
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState( {noChange:false,[e.target.name]: e.target.value})
    };

    isValid(){
        let {name,email,subject,message,noChange}=this.state;
        if(noChange || name==="" || email==="" || subject==="" || message==="") {
            return false;
        } else {
            return true;
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        let {name,email,subject,message,errors}=this.state;
        errors.name = (name === "") ? "The name field must be filled" : "";
        errors.email = validEmailRegEx.test(email) ? "" : "Email is not valid";
        errors.subject = (subject === "") ? "The subject field must be filled" : "";
        errors.message = (message === "") ? "The message field must be filled" : "";
        if (this.isValid()) {
            this.setState({name:"",email:"",subject:"",message:"",errors:errors,messageSuccess:"Your message was sent!"});
        } else {
            this.setState({errors:errors});
        }
    };

    render() {
        let {errors} = this.state;
        return (
            <>
                <form className={"footer__contact__form"} name={"contactForm"} onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>{this.state.messageSuccess}</legend>
                        <span>{errors.name}</span>
                        <input type={"text"} name={"name"} value={this.state.name} onChange={this.handleChange}
                               placeholder={"Full Name "}/>
                        <span>{errors.email}</span>
                        <input type={"email"} name={"email"} value={this.state.email} onChange={this.handleChange}
                               placeholder={"Email Address "}/>
                        <span>{errors.subject}</span>
                        <input type={"text"} name={"subject"} value={this.state.subject} onChange={this.handleChange}
                               placeholder={"Subject"}/>
                        <span>{errors.message}</span>
                        <textarea name={"message"} placeholder={"Message"} value={this.state.message}
                                  onChange={this.handleChange}/>
                        <input type={"submit"} value={"Submit"}/>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default FooterContactForm;