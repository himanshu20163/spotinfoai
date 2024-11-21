import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Main from "./components/layout/Main";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Collection_list from "./pages/Collection-list";
import Pageten from "./pages/Pageten";
import ApiForm from "./pages/pagetweleve";
import Pagethird from "./pages/pagethird";
import Pagefifteen from "./pages/pagefifteen";
import Pagesixteen from "./pages/pageonesix";
import Pageseven from "./pages/Pagesoneseven";
import SearchApp from "./pages/Searchapp";
import Pagefive from "./pages/pagefive";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Nested routes with Main layout */}
        <Route path="/" element={<Main />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="search-app" element={<SearchApp />} />
          <Route path="pagesixteen" element={<Pagesixteen />} />
          <Route path="pageseven" element={<Pagefive />} />
          <Route path="api-data" element={<Pageten />} />
          <Route path="api-data/page15" element={<Pagefifteen />} />
          <Route path="config-app" element={<ApiForm />} />
          <Route path="page-third" element={<Pagethird />} />
          <Route path="rtl" element={<Rtl />} />
          <Route path="collections" element={<Collection_list />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
