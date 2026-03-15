import LoginLayout from "../layout/LoginLayout"

function Login() {
    return (
        <>
            <div img>
                <img style={{width: "100%", height:"50%", objectFit:"cover"}} src="./images/background.png" alt="background.png" />
                <LoginLayout/>
            </div>

        </>
    )
}

export default Login