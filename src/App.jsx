import { Provider } from "react-redux";
import PostSags from "./Components/PostSaga";
import store from "./Redux/stor";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <PostSags />
      </div>
    </Provider>
  );
}

export default App;
