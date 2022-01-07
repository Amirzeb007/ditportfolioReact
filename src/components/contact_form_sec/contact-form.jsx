import React from 'react';

function MyContactForm(props) {
    return (
        <div className="contact_form_wrapper">
            <form action="">
                {props.hd &&
                    <h5>{props.hd}</h5>
                }
                <div className="input_wrapper">
                    <input type="text" name="" id="" placeholder="Full Name" />
                </div>
                <div className="input_wrapper">
                    <input type="text" name="" id="" placeholder="Phone" />
                </div>
                <div className="input_wrapper">
                    <input type="email" name="" id="" placeholder="Email Address" />
                </div>
                <div className="input_wrapper">
                    <textarea name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
                </div>
                <div className="btn_wrapper">
                    <input type="submit" className="common_btn" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default MyContactForm;