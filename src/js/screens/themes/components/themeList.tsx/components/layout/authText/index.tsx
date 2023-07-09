import useScreenStore, { ScreenStore } from "../../../../../../../stores/screenStore";

const AuthText = () => {
    const screenStore: ScreenStore = useScreenStore((state: any) => {
        return state;
    })

    return (
        <div>
            <p style={{
                fontStyle: "italic",
                textAlign: "center"
            }}>
                Please login to see saved themes.
            </p>
            <p style={{
                fontStyle: "italic",
                textAlign: "center"
            }}>
                Click here to
                <span style={{ textDecoration: "underline", cursor: "pointer" }} onClickCapture={() => {
                    screenStore.setCurrentScreen("login")
                }}> Login</span> or <span style={{ textDecoration: "underline", cursor: "pointer" }} onClickCapture={() => {
                    screenStore.setCurrentScreen("register")
                }}>Register</span>
            </p>
        </div>
    )
}

export default AuthText;