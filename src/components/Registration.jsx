const Registration = () => {
    return (<div className = "registration-form">
        <form>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter your name"></input>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" placeholder="Enter your email"></input>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" placeholder="Enter your password"></input>
            </div>
            <div>
                <label>Confirm password:</label>
                <input type="password" placeholder="Enter your password"></input>
            </div>  <div>
                <label>Phone number:</label>
                <input type="text" placeholder="Enter your phone number"></input>
            </div>
            <button className = "reg-button">Submit</button>
        </form>
    </div>)
}

export default Registration