import AZ from './Components/AZ';
import TR from './Components/TR';
import ENG from './Components/ENG';
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from './Stores/AppSlice';

function App() {
  const DarkTheme = useSelector(state => state.AppSlice.darkMode);
  const language = useSelector(state => state.AppSlice.language);
  const dispatch = useDispatch();
  const langs = ['AZ','TR','ENG'];

  return (
    <div className={DarkTheme ? 'App-dark' : 'App-light'}>
      {
        langs.map(lang => {
          return  <button className={language === lang ? 'active button' : 'button'} onClick={() => dispatch(setLanguage(lang))}>{lang}</button>
        })
      }

      {
        language === 'AZ' ? <AZ /> : language === 'TR' ? <TR /> : <ENG />
      }
    </div>
  );
}

export default App;
