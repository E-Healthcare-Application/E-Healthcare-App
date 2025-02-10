import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EnterToken = () => {
    const [token, setToken] = useState('');
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    const submit = (e) => {
        e.preventDefault();

        if (token === state?.token) {
            navigate('/reset-password', { state: { email: state.email } });
        } else {
            setCounter(prevCounter => {
                const newCounter = prevCounter + 1;
                if (newCounter < 2) {
                    alert(`Incorrect token: ${2 - newCounter} tries left`);
                    navigate('/enter-token', { state: { token: state?.token, counter: newCounter } });
                } else {
                    navigate('/userLogin');
                }
                return newCounter;
            });
        }
    };

    return (
        <>
            <h2 className="text-center mt-3">Enter Token</h2>
            <form className="container bg-dark pt-2 mt-3" style={{ width: "30vw" }} onSubmit={submit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control text-center mt-3"
                        placeholder="Enter Token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary my-3 offset-5" type="submit">SUBMIT</button>
            </form>
        </>
    );
};

export default EnterToken;
