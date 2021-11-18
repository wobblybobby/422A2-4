import React, {useState} from 'react';

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        custID : "",
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    })

    const onCreateAccount = (evt) => {
        evt.preventDefault();

        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/customer/register`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
            alert(json.message);
            setFormData({
                firstName : "",
                lastName : "",
                email : "",
                password : ""
            })
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    }

    return (
        <section id="register-section" style={{maxWidth : '40%', margin : 'auto'}}>
            <form action="" onSubmit={onCreateAccount}>
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" class="form-control" id="firstName" placeholder="Enter first name" required
                    value={formData.firstName} onChange={(evt)=>{
                        setFormData({...formData, firstName : evt.target.value})
                    }}></input>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Enter last name" required
                    value={formData.lastName} onChange={(evt)=>{
                        setFormData({...formData, lastName : evt.target.value})
                    }}></input>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" required
                    value={formData.email} onChange={(evt)=>{
                        setFormData({...formData, email : evt.target.value})
                    }}></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" required
                    value={formData.password} onChange={(evt)=>{
                        setFormData({...formData, password : evt.target.value})
                    }}></input>
                </div>
                <button type="submit" class="btn btn-primary" style={{marginTop : '25px'}}>Register</button>
            </form>  
        </section>
    )
}

export default RegistrationForm
