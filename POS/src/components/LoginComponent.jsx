function LoginComponent(){
    return(
        <div style={{backgroundColor: 'yellow', width:'400px', height:'400px', padding:'50px', borderRadius:'50px'}}>
            <div>
                <h1>Welcome Back!</h1>
                <p> Please enter your username and password</p>
                <p>Username</p>
                <textarea>Username</textarea>
                <p>Password</p>
                <textarea>Password</textarea>
                <p>Forgot Password</p>
            </div>
            <div style={{backgroundColor: 'blue', width:'100px', height:'20px', padding:'20px', borderRadius:'10px'}}>
                <p>Reset password</p>
            </div>
            <div>
                <p>Don't have an account?Register</p>
            </div>
        </div>
    )
}

export default LoginComponent;