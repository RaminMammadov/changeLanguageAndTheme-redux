import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../Stores/AppSlice";

export default function ENG() {
    const DarkTheme = useSelector(state => state.AppSlice.darkMode)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(setDarkMode())}>{DarkTheme ? 'Light mode' : 'Dark mode'}</button>
            <h1>Hello World!</h1>
            <p>
                This app is a test app for learning Redux.
            </p>
        </div>
    )
}