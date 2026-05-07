import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import metadataParser from "markdown-yaml-metadata-parser";
import recipeFiles from "../recipesFiles.json";

interface RecipeMetadata {
  title?: string;
  category?: string;
}

interface Recipe {
  recipeFileName: string;
  content: string;
  slug: string;
  metadata: RecipeMetadata;
}

interface GroupedRecipes {
  [category: string]: Recipe[];
}

export const Recipes = () => {
  const [recipesByCategory, setRecipesByCategory] = useState<GroupedRecipes>(
    {},
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const groupRecipesByCategory = (recipes: Recipe[]): GroupedRecipes => {
      return recipes.reduce((acc: GroupedRecipes, recipe: Recipe) => {
        const category =
          recipe.metadata.category?.toLowerCase() || "uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(recipe);
        return acc;
      }, {});
    };

    const loadRecipeList = async () => {
      try {
        const recipePromises = recipeFiles.map(async (file: string) => {
          const contentResponse = await fetch(`/md/recipes/${file}`);
          const content = await contentResponse.text();

          // Using the parser
          const parsed = metadataParser(content);
          const metadata = parsed.metadata as RecipeMetadata;

          const recipeFileName = file.replace(".md", "");
          const slug = recipeFileName.replaceAll(" ", "-");

          return { recipeFileName, content, slug, metadata };
        });

        const results = await Promise.all(recipePromises);
        const grouped = groupRecipesByCategory(results);

        setRecipesByCategory(grouped);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error loading recipes:", error.message);
        }
        setLoading(false);
      }
    };

    loadRecipeList();
  }, []);

  return (
    <div className="Container">
      <h1 className="TextTitle">Recipes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="TextSubtitle">Mains</h2>
          <ul>
            {recipesByCategory["main"].map((recipe, index) => (
              <li key={index} className="Bold">
                <Link to={`/recipes/${recipe.slug}`}>
                  {recipe.metadata.title
                    ? recipe.metadata.title
                    : recipe.recipeFileName}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="TextSubtitle">Sides</h2>
          <ul>
            {recipesByCategory["side"].map((recipe, index) => (
              <li key={index} className="Bold">
                <Link to={`/recipes/${recipe.slug}`}>
                  {recipe.metadata.title
                    ? recipe.metadata.title
                    : recipe.recipeFileName}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="TextSubtitle">Desserts</h2>
          <ul>
            {recipesByCategory["dessert"].map((recipe, index) => (
              <li key={index} className="Bold">
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
      <p className="Italic">
        N.B.: These recipes are optimized for my kitchen. You might need to
        adapt baking times and oven temperatures to your own.
      </p>
    </div>
  );
};
