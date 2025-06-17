import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import metadataParser from "markdown-yaml-metadata-parser";
import recipeFiles from "../../recipesFiles.json";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipeList = async () => {
      try {
        const recipePromises = recipeFiles.map(async (file) => {
          const contentResponse = await fetch(`/md/recipes/${file}`);
          const content = await contentResponse.text();
          const metadata = metadataParser(content).metadata;
          let recipeFileName = file.replace(".md", "");
          let slug = recipeFileName.replaceAll(" ", "-");
          return { recipeFileName, content, slug, metadata };
        });
        setRecipes(await Promise.all(recipePromises));
        setLoading(false);
      } catch (error) {
        console.error("Error loading recipes:", error.message);
        setLoading(false);
      }
    };

    loadRecipeList();
  }, []);

  return (
    <div className="Container Recipes">
      <h1 className="Subtitle">Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="RecipeTitleList">
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index} className="RecipeTitle Bold">
                <Link to={`/recipes/${recipe.slug}`}>
                  {recipe.metadata.title
                    ? recipe.metadata.title
                    : recipe.recipeFileName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="Italic RecipeIntro">
        N.B.: These recipes are optimized for my kitchen. You might need to
        adapt baking times and oven temperatures to your own.
      </p>
    </div>
  );
};

export default Recipes;
