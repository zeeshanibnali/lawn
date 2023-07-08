import useScreenStore, { ScreenStore } from "../stores/screenStore";
import useThemeStore from "../stores/themeStore";
import AuthStyles from "./sc";
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const themeStore = useThemeStore((state: any) => {
        return state;
    })
    const screenStore: ScreenStore = useScreenStore((state: any) => {
        return state;
    })
    const handleAction = () => {
        console.log("Handling")
        console.log("email", email)
        console.log("password", password)
        screenStore.setCurrentScreen("home")

    }
    return (
        <AuthStyles.Container>
            <AuthStyles.SubContainer style={{
            }}>
                <AuthStyles.BrandName style={{
                }}>Lawn</AuthStyles.BrandName>
                <AuthStyles.TagLine style={{
                    color: themeStore.primButton
                }}>The Designers Wardobe</AuthStyles.TagLine>
                <AuthStyles.FormGroup>
                    <AuthStyles.Label>
                        Email
                    </AuthStyles.Label>
                    <AuthStyles.Input type="email" style={{
                        color: themeStore.primButton
                    }} onChange={(e) => setEmail(e.target.value)} value={email} />
                </AuthStyles.FormGroup>
                <AuthStyles.FormGroup>
                    <AuthStyles.Label>
                        Password
                    </AuthStyles.Label>
                    <AuthStyles.Input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </AuthStyles.FormGroup>
                <AuthStyles.Text>Already a user? <span style={{
                    cursor: "pointer",
                    textDecoration: "underline"
                }} onClick={() => {
                    screenStore.setCurrentScreen("login")
                }}>Login here</span></AuthStyles.Text>
                <AuthStyles.Align>
                    <AuthStyles.Button onClick={() => {
                        handleAction()
                    }}>
                        <AuthStyles.ButtonText>Register</AuthStyles.ButtonText>
                    </AuthStyles.Button>
                    <p>or</p>
                    <AuthStyles.Button style={{
                        backgroundColor: "white"
                    }}>
                        <p onClick={() => { }} style={{
                        }}>Continue without an account =)</p>
                    </AuthStyles.Button>
                </AuthStyles.Align>
            </AuthStyles.SubContainer>
        </AuthStyles.Container>
    )
}
export default Register;