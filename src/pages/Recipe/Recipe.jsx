import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../../MarkdownRenderer";
import recipeFiles from "../../recipesFiles.json";

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                const filename = recipeFiles.find((file) => {
                    const slug = file.replaceAll(".md", "").replaceAll(" ", "-");
                    return slug === id;
                });

                if (filename) {
                    const contentResponse = await fetch(`/md/${filename}`);
                    const content = await contentResponse.text();
                    setRecipe({ content, filename, slug: id });
                }
            } catch (error) {
                console.error("Error loading recipe:", error.message);
            }
        };

        loadRecipe();
    }, [id]);

    if (!recipe) {
        return <p></p>;
    }

    return (
        <div className="Container Blog">
            <h2 className="Subtitle">{recipe.filename.replace(".md", "")}</h2>
            <MarkdownRenderer content={recipe.content} />
        </div>
    );
};

export default Recipe;
