// import Header from "./components/Header";
// import PostContent from "./components/PostContent";
import Nd from "./components/Nd";
// import PostLists from "./components/PostLists";
import Nd2 from "./components/Nd2";
import LessText from "./components/LessText";
import TodoList from "./components/TodoList";
import Fetch from "./components/praktika6/Fetch"
import FetchPostsCard from "./components/praktika6/PostsList";
import Data from "./components/praktika7/Data";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ErrorPage from "./components/praktika7.2/Pages/ErrorPage"
import Profiles from "./components/praktika7/Profiles";
// import Home from "./components/praktika7.2/Pages/Home"
import PostContent from "./components/PostContent";

function App() {
  return (
    <div className="container">
      <Router>

        <nav className="text-decoration-none">
        <Link to="/"> <button className="btn btn-success m-2 offset-1"> Home </button></Link>
        <Link to="/components/praktika7/Data"> <button className="btn btn-success m-2 offset-1"> DATA </button></Link>
        <Link to="/TodoList"> <button className="btn btn-success m-2 offset-1"> Todolist </button></Link>
        <Link to="/LessText"><button className="btn btn-success m-2 offset-1">LessText</button></Link>
        <Link to="/mytasks"><button className="btn btn-success m-2 offset-1">Is my task done?</button></Link>
        <Link to="/Nd2"><button className="btn btn-success m-2 offset-1">Like/hate/reset</button></Link>
        <Link to="/components/praktika6/Fetch"><button className="btn btn-success m-2 offset-1">fetch</button></Link>


      </nav>
        <div className="row">   
          <Routes>
          <Route path="/" element={<PostContent />} />
          <Route path="/mytasks" element={<Nd />} />
          <Route path="/Nd2" element={<Nd2 />} />
          <Route path="/components/praktika6/Fetch" element={<Fetch />} />
          <Route path="/TodoList" element={<TodoList />}></Route>
       <Route path="/profile/:username" element={<Profiles />}></Route>
        
       <Route path="/components/praktika7/Data" element={<Data />}></Route>
       <Route path="/LessText" element={
       <LessText 
       text={'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it'}
       maxLength={35} /> }> </Route>    
       <Route path="*" element={<ErrorPage />} />
       </Routes>
       
       </div>      
    </Router>
    
    </div>
  );
}

export default App;
