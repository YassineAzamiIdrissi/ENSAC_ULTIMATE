//router
// import IndexRouters from "./router/index"

//scss
import "./assets/scss/hope-ui.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/customizer.scss";
//import "./style/style.css";

// Redux Selector / Action
// Start collaboration with my Awsome Broda
// Ending collaboration with my brotha.
// The ending of the Ending collaboration with my brotha.
import { useDispatch } from "react-redux";

// import state selectors
import { setSetting } from "./store/setting/actions";


function App({ children }) {
  const dispatch = useDispatch();
  dispatch(setSetting());
  return <div className="App">{children}</div>;
}

export default App;
