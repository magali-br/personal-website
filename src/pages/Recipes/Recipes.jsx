import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipeFiles from "../../recipesFiles.json";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRecipeList = async () => {
            const recipes = recipeFiles.map(file => {
                let recipeName = file.replace(".md", "")
                let slug = recipeName.replaceAll(" ", "-");
                setLoading(false);
                return { recipeName, slug };
            });
            setRecipes(await Promise.all(recipes));
        };

        loadRecipeList();
    }, []);

    return (
        <div className="Container Recipes">
            <h2 className="Subtitle">Recipes</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="RecipeTitleList">
                    <ul>
                        {recipes.map((recipe, index) => (
                            <li key={index} className="RecipeTitle Bold">
                                <Link to={`/recipes/${recipe.slug}`}>
                                    {recipe.recipeName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <p className="Italic RecipeIntro">
                N.B.: These recipes are optimized for my kitchen. You might need to adapt baking times and oven temperatures to your own.
            </p>
        </div>
    );
};

export default Recipes;
