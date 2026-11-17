import {useState} from "react";
import ArticleCard from "../components/ArticleCard.jsx";
import {articlesDeTest} from "../donnees-test.js";
// TODO(P502) : Étape 5.
// Page d'accueil : présentation et les derniers articles.
export default function Accueil() {
  const [favoris, setFavoris] = useState([]); 
  function basculerFavori(articleId) {
    if (favoris.includes(articleId)) {
      setFavoris(favoris.filter(id => id !== articleId));
    } else {
      setFavoris([...favoris, articleId]);
    }
  }
  return (
    <section>
      <h1>Bienvenue sur mon blog</h1>
      <p>Voici les derniers articles publiés :</p>
      <ArticleCard article={articlesDeTest[0]} estFavori={favoris.includes(articlesDeTest[0].id)} onBasculerFavori={basculerFavori} />
      <ArticleCard article={articlesDeTest[1]} estFavori={favoris.includes(articlesDeTest[1].id)} onBasculerFavori={basculerFavori} />
      <ArticleCard article={articlesDeTest[2]} estFavori={favoris.includes(articlesDeTest[2].id)} onBasculerFavori={basculerFavori} />
    </section>
  );
}