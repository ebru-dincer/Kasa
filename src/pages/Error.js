import "../sass/main.css"
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * 
 * @returns <ErrorPage />
 */
export default function ErrorPage() {
  return (
    <div>
        <Header />
        <div className="error-page">
            <h1 className="error-page__status">404</h1>
            <p className="error-page__txt">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error-page__home">Revenir sur la page d'accueil</NavLink>
        </div>
        <Footer />
    </div>
  );
}