import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import AllRecipesPage from "./pages/AllRecipesPage";
import RecipesDetailsPage from "./pages/RecipeDetailsPage";
import NewRecipePage from "./pages/NewRecipePage";
import HomePage from "./pages/HomePage";
import { SessionContext } from "./contexts/SessionContext";

// Import your custom CSS file for global styles
import "./styles/index.css";

const PrivateRoutes = ({ children }) => <PrivateRoute>{children}</PrivateRoute>;

function App() {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <>
      {isAuthenticated && <Navbar />}

      <div className="mainContent">
        {" "}
        {/* Apply padding for navbar */}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <LoginPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <ProfilePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/recipes"
            element={
              <PrivateRoutes>
                <AllRecipesPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={
              <PrivateRoutes>
                <RecipesDetailsPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/recipes/new"
            element={
              <PrivateRoutes>
                <NewRecipePage />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<h1>404 page</h1>} />
        </Routes>
      </div>

      {isAuthenticated && <Footer />}
    </>
  );
}

export default App;
