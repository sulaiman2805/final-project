import { Card } from "antd";
import { Input } from "antd";
import { Button, Flex } from "antd";
import { notification } from "antd";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = ({ title, description }) => {
    api.open({
      title: title || "Notification Title",
      description:
        description ||
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const submitHandler = () => {
    console.log(userName, email, password, rePassword);
    if (!userName || !email || !password || !rePassword) {
      console.log("Input refs are not set");
      openNotification({
        title: "Error",
        description: "Please fill all field!",
      });
    } else {
      setLoading(true);
      setTimeout(() => {
        if (
          !userName === "sulaiman123" ||
          !email === "sulaiman@mail.com" ||
          !password === "abc123" ||
          !rePassword === password
        ) {
          openNotification({
            title: "Sukses",
            description: "Login berhasil!",
          });
        } else {
          openNotification({
            title: "Gagal!",
            description: "Email dan Password tidak sesuai",
          });
        }
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <div
      div
      style={{
        margin: "auto",
        marginTop: "100px",
        width: "500px",
        height: "300px",
      }}
    >
      {contextHolder}
      <Card style={{ width: 500, height: 650 }}>
        <div style={{ display:'flex', justifyContent:'center'}}>
            <img src="./images/Logo.png" alt="Logo POS" />
        </div>
        <div style={{ display:'flex', justifyContent:'center'}}>
            <h2>Welcome Back!</h2>
        </div>
        <div style={{ fontSize:'11px', color:'gray',display:'flex', justifyContent:'center'}}>
            <p>Create your account here!</p>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <p>Username</p>
          <Input type={"Username"} value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <p>Email</p>
          <Input type={"email"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div style={{marginBottom:'10px'}}>
          <p>Password</p>
          <Input.Password ref={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div style={{marginBottom:'30px'}}>
          <p>Re-Password</p>
          <Input.Password ref={rePassword} onChange={(e) => setRePassword(e.target.value)} placeholder="Re-Password" />
        </div>
        <div>
          <Button type="primary" block onClick={submitHandler} loading={loading}>
            Register
          </Button>
          <div style={{ fontSize:'11px', color:'gray',display:'flex', justifyContent:'Center', marginBottom: '30px'}}>
            <p>Already have an  account? <a href="#">Login</a></p>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
