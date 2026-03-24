import { Card } from "antd";
import { Input } from "antd";
import { Button, Flex } from "antd";
import { notification } from "antd";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
    console.log(userName, password);
    if (!userName || !password) {
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
          !password === "password"
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
      <Card style={{ width: 500, height: 500 }}>
        <div style={{ display:'flex', justifyContent:'center'}}>
            <img src="./images/Logo.png" alt="Logo POS" />
        </div>
        <div style={{ display:'flex', justifyContent:'center'}}>
            <h2>Welcome Back!</h2>
        </div>
        <div style={{ fontSize:'11px', color:'gray',display:'flex', justifyContent:'center'}}>
            <p>Please enter your username and password here!</p>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <p>Email</p>
          <Input type={"userName"} value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        </div>
        <div>
          <p>Password</p>
          <Input.Password ref={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <div style={{ fontSize:'10px', color:'gray',display:'flex', justifyContent:'flex-end', marginBottom: '10px'}}>
            <p>Forgot Password?</p>
        </div>
        <div>
          <Button type="primary" block onClick={submitHandler} loading={loading}>
            Login
          </Button>
          <div style={{ fontSize:'11px', color:'gray',display:'flex', justifyContent:'Center', marginBottom: '30px'}}>
            <p>Don't have an  account? <a href="#">Register</a></p>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
