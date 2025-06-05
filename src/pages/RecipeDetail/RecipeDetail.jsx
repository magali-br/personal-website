import "./RecipeDetail.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../../MarkdownRenderer";
import metadataParser from 'markdown-yaml-metadata-parser'
import recipeFiles from "../../recipesFiles.json";

const RecipePhoto = (imageName, recipeTitle) => {
    if (!imageName) {
        return <div />;
    }
    return <img className="RecipeDetailImage" src={"/img/" + imageName}
        alt={"A photo of " + recipeTitle}
    />;
}

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                const filename = recipeFiles.find((file) => {
                    const slug =
                        file.replaceAll(".md", "").replaceAll(" ", "-");
                    return slug === id;
                });

                if (filename) {
                    const contentResponse =
                        await fetch(`/md/recipes/${filename}`);
                    const content = await contentResponse.text();
                    const result = metadataParser(content);
                    setRecipe({
                        content,
                        fallbackRecipeTitle: filename.replaceAll(".md", ""),
                        slug: id,
                        metadata:
                            (result && result.metadata) ? result.metadata : {}
                    });
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
            <h2 className="Subtitle">
                {recipe.metadata.title ?
                    recipe.metadata.title :
                    recipe.fallbackRecipeTitle
                }
            </h2>
            {RecipePhoto(recipe.metadata.image, recipe.metadata.title)}
            <MarkdownRenderer content={recipe.content} />
        </div>
    );
};

export default RecipeDetail;
