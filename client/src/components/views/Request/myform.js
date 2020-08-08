import React from "react";


export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
        status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
        <form className="form-master"
            onSubmit={this.submitForm}
            action="https://formspree.io/xyynolko"
            method="POST"
        >
            <div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Full Name"
								/>
							</div>
						</div>
					</div>
                    <div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
                    <div className="form-group hiddenLeft">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="subject"
									className="form-control form-control-lg"
									id="subject"
									placeholder="Subject"
								/>
							</div>
						</div>
					</div>
                    <div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="4"
									placeholder="How can we assist you today?"
								/>
							</div>
						</div>
					</div>
                    <div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto simple">
                        {status === "SUCCESS" ? <p>Your Request has been Recieved!</p> : <button
								type="submit"
								className="btn btn-success mb-2 hidden gsubmit">
								Submit
							</button>}
                            {status === "ERROR" && <p className="red">Please Try Again, There was an error.</p>}
						</div>
					</div>
        </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }
    }