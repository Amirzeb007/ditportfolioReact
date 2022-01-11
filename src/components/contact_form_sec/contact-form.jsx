import React, { useState } from 'react';

function MyContactForm(props) {
    const [formData, setformData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'full-name') {
            setformData(prev => ({ ...prev, fullName: e.target.value }));
        }
        if (e.target.name === 'phone') {
            setformData(prev => ({ ...prev, phone: e.target.value }));
        }
        if (e.target.name === 'email') {
            setformData(prev => ({ ...prev, email: e.target.value }));
        }
        if (e.target.name === 'message') {
            setformData(prev => ({ ...prev, message: e.target.value }));
        }
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(formData);
        setformData({ fullName: '', phone: '', email: '', message: '' });
    }

    return (
        <div className="contact_form_wrapper">
            <form action="" autoComplete='off' onSubmit={handleSubmit}>
                {props.hd &&
                    <h5>{props.hd}</h5>
                }
                <div className="input_wrapper">
                    <input type="text" name="full-name" required value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
                </div>
                <div className="input_wrapper">
                    <input type="text" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Phone" />
                </div>
                <div className="input_wrapper">
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" />
                </div>
                <div className="input_wrapper">
                    <textarea name="message" cols="30" value={formData.message} rows="7" onChange={handleChange} placeholder="Message"></textarea>
                </div>
                <div className="btn_wrapper">
                    <input type="submit" className="common_btn" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default MyContactForm;