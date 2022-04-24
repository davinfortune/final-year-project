import { useState } from 'react';
import ColoredLine from '../../StyleCompenents/ColoredLine';

function LoginUser() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            window.location.href = '/dashboard';
        }
    }

    return (
        <form action="">
            <div className = "formInput">
                <label>Username</label>
                <input type="text" placeholder="Username" required
                value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className = "formInput">
                <label>Password</label>
                <input type="password" placeholder="Password" required
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={handleOnSubmit}>Login</button>
        </form>
    );
}

export default LoginUser;