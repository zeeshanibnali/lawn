import useScreenStore, { ScreenStore } from "../../../stores/screenStore";
import useThemeStore from "../../../stores/themeStore";
import useUserStore, { UserStore } from "../../../stores/userStore";
import AuthStyles from "../sc";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const themeStore = useThemeStore((state: any) => {
    return state;
  });
  const screenStore: ScreenStore = useScreenStore((state: any) => {
    return state;
  });

  const userStore: UserStore = useUserStore((state: any) => {
    return state;
  });
  const handleAction = () => {
    if (name === "" || email === "" || password === "") {
      setError("Please fill all the fields");
      return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = {
      name: name,
      email: email,
      //   password: password,
    };
    let raw = JSON.stringify(data);

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost:4000/register", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(data.message);
          return;
        } else {
          userStore.setUser({
            id: data.id,
            name: data.name,
            email: data.email,
          });
          screenStore.setCurrentScreen("home");
        }
      });
  };
  return (
    <AuthStyles.Container>
      <AuthStyles.SubContainer style={{}}>
        <AuthStyles.BrandName style={{}}>Lawn</AuthStyles.BrandName>
        <AuthStyles.TagLine
          style={{
            color: themeStore.primButton,
          }}
        >
          The Designers Wardobe
        </AuthStyles.TagLine>
        <AuthStyles.FormGroup>
          <AuthStyles.Label>Name</AuthStyles.Label>
          <AuthStyles.Input
            type="text"
            style={{
              color: themeStore.primButton,
            }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </AuthStyles.FormGroup>
        <AuthStyles.FormGroup>
          <AuthStyles.Label>Email</AuthStyles.Label>
          <AuthStyles.Input
            type="email"
            style={{
              color: themeStore.primButton,
            }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </AuthStyles.FormGroup>
        <AuthStyles.FormGroup>
          <AuthStyles.Label>Password</AuthStyles.Label>
          <AuthStyles.Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </AuthStyles.FormGroup>
        <AuthStyles.Text>
          Already a user?{" "}
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              screenStore.setCurrentScreen("login");
            }}
          >
            Login here
          </span>
        </AuthStyles.Text>
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
        <AuthStyles.Align>
          <AuthStyles.Button
            onClick={() => {
              handleAction();
            }}
          >
            <AuthStyles.ButtonText>Register</AuthStyles.ButtonText>
          </AuthStyles.Button>
          <p>or</p>
          <AuthStyles.Button
            style={{
              backgroundColor: "white",
            }}
          >
            <p
              onClick={() => {
                screenStore.setCurrentScreen("home");
              }}
              style={{}}
            >
              Continue without an account =)
            </p>
          </AuthStyles.Button>
        </AuthStyles.Align>
      </AuthStyles.SubContainer>
    </AuthStyles.Container>
  );
};
export default Register;
