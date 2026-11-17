import ArticleCard from "../components/ArticleCard.jsx";
import {articlesDeTest} from "../donnees-test.js";
// TODO(P502) : Étape 5.
// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  return (
    <section>
      <h1>Bienvenue sur mon blog</h1>
      <p>Voici les derniers articles publiés :</p>
      <ArticleCard article={articlesDeTest[0]} />
      <ArticleCard article={articlesDeTest[1]} />
      <ArticleCard article={articlesDeTest[2]} />
    </section>
  );
}
