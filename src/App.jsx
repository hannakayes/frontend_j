import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import KunstPage from "./pages/KunstPage";
import PrivateRoute from "./components/PrivateRoute";
import AllRecipesPage from "./pages/AllRecipesPage";
import RecipesDetailsPage from "./pages/RecipeDetailsPage";
import MusikPage from "./pages/MusikPage";
import HomePage from "./pages/HomePage";
import FilmePage from "./pages/FilmePage";
import SerienPage from "./pages/SerienPage";
import DokusPage from "./pages/DokusPage";
import BingoPage from "./pages/BingoPage";
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
            path="/kunst"
            element={
              <PrivateRoutes>
                <KunstPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/rezepte"
            element={
              <PrivateRoutes>
                <AllRecipesPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/rezepte/:recipeId"
            element={
              <PrivateRoutes>
                <RecipesDetailsPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/musik"
            element={
              <PrivateRoutes>
                <MusikPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/filme"
            element={
              <PrivateRoutes>
                <FilmePage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/serien"
            element={
              <PrivateRoutes>
                <SerienPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dokus"
            element={
              <PrivateRoutes>
                <DokusPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/bingo"
            element={
              <PrivateRoutes>
                <BingoPage />
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
