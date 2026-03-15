function RegisterComponent() {
    return (
        <div style={{ backgroundColor: 'yellow', width: '400px', height: '400px', padding: '50px', borderRadius: '50px' }}>
            <div>
                <h1>Welcome Back!</h1>
                <p> Create your account here!</p>
                <p>Username</p>
                <textarea>Username</textarea>
                <p>Email</p>
                <textarea>Email</textarea>
                <p>Password</p>
                <textarea>Password</textarea>
                <p>Confirm Password</p>
                <textarea>Confirm Password</textarea>
            </div>
            <div style={{ backgroundColor: 'blue', width: '100px', height: '20px', padding: '20px', borderRadius: '10px' }}>
                <p>Login</p>
            </div>
            <div>
                <p>Already have an account?Register</p>
            </div>
        </div>
    )
}

export default RegisterComponent;