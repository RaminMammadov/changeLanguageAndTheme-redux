import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../Stores/AppSlice";

export default function TR() {
    const DarkTheme = useSelector(state => state.AppSlice.darkMode)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(setDarkMode())}>{DarkTheme ? 'İşıklı mod' : 'Karanlık mod'}</button>
            <h1>Merhaba Dünya!</h1>
            <p>
                Bu uygulama Redux öğrenmek için bir test uygulamasıdır.
            </p>
        </div>
    )
}