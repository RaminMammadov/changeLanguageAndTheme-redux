import { useSelector,useDispatch } from "react-redux";
import { setDarkMode } from "../Stores/AppSlice";

export default function AZ () {
    const DarkTheme = useSelector(state => state.AppSlice.darkMode)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(setDarkMode())}>{DarkTheme ? 'İşıqlı mod' : 'Qaranlıq mod'}</button>
            <h1>Salam Dünya!</h1>
            <p>
                Bu tətbiq,reduxu öyrənərkən test üçün hazırlanmış bir təqbiqdir.
            </p>
        </div>
    )
}