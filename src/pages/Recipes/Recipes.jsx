import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipeFiles from "../../recipesFiles.json";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRecipes = async () => {
            try {
                const contentPromises = recipeFiles.map(async (file) => {
                    const contentResponse = await fetch(`/md/recipes/${file}`);
                    const content = await contentResponse.text();
                    let slug = file.replaceAll(".md", "");
                    slug = slug.replaceAll(" ", "-");
                    return { content, filename: file, slug };
                });
                const markdownContents = await Promise.all(contentPromises);

                setRecipes(markdownContents);
                setLoading(false);
            } catch (error) {
                console.error("Error loading recipes:", error.message);
                setLoading(false);
            }
        };

        loadRecipes();
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
                                    {recipe.filename.replace(".md", "")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <p className="Italic RecipeIntro">
                N.B.: These recipes are optimized for my kitchen. You might need to adapt them to yours, especially baking times and oven temperatures!
            </p>
        </div>
    );
};

export default Recipes;
