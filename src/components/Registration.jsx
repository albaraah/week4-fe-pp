const Registration = () => {
    return (<div className="registration-form">
        <form className="form-input">
            <div className="input-form">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name"></input>
            </div>
            <div className="input-form">
                <label>Email:</label>
                <input type="text" placeholder="Enter your email"></input>
            </div>
            <div className="input-form">
                <label>Password:</label>
                <input type="password" placeholder="Enter your password"></input>
            </div>
            <div className="input-form">
                <label>Confirm password:</label>
                <input type="password" placeholder="Enter your password"></input>
            </div>
            <div className="input-form">
                <label>Phone number:</label>
                <input type="text" placeholder="Enter your phone number"></input>
            </div>
            <button className="reg-button">Submit</button>
        </form>
    </div>)
}

export default Registration