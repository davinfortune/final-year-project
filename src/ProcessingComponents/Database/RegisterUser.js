import { useState } from 'react';
import ColoredLine from '../../StyleCompenents/ColoredLine';

function RegisterUser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [telephone, setTelephone] = useState("");

    const handleOnSubmit = async (e) => {
        if(password === confirmpassword){
            e.preventDefault();
            let result = await fetch(
            'https://final-year-project-davin.herokuapp.com/register', {
                method: "post",
                body: JSON.stringify({ username, email, password, country, telephone }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Data saved succesfully");
                window.location.href = '/';
            }
        } else {
            alert("Passwords dont match");
        }
    }
    return (
        <>
            <h1>Register</h1>

            <div className = "formInput">
                <label>Username</label>
                <input type="text" placeholder="Username" required
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Email</label>
                <input type="text" placeholder="Email" required
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Password</label>
                <input type="password" placeholder="Password" required
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" required
                value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Country</label>
                <input type="text" placeholder="Country" required
                value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Telephone</label>
                <input type="text" placeholder="Telephone" required
                value={telephone} onChange={(e) => setTelephone(e.target.value)} />
            </div>
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" id = "registerButton"
                onClick={handleOnSubmit}>Submit</button>

    
        </>
    );
}

export default RegisterUser;