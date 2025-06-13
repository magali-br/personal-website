import "./RecipeDetail.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../../MarkdownRenderer";
import metadataParser from "markdown-yaml-metadata-parser";
import recipeFiles from "../../recipesFiles.json";

const RecipeTitle = (recipe) => {
  if (recipe.metadata && recipe.metadata.title) {
    return recipe.metadata.title;
  }
  return recipe.fallbackRecipeTitle;
};

const RecipePhoto = (recipe) => {
  if (recipe.metadata && recipe.metadata.image) {
    return (
      <img
        className="RecipeDetailImage"
        src={"/img/" + recipe.metadata.image}
        alt={"A photo of " + RecipeTitle(recipe)}
      />
    );
  }
  return <div />;
};

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipe = async () => {
      const filename = recipeFiles.find((file) => {
        const slug = file.replaceAll(".md", "").replaceAll(" ", "-");
        return slug === id;
      });

      if (!filename) {
        setLoading(false);
        return;
      }
      const content = await fetch(`/md/recipes/${filename}`).then(
        (contentResponse) => {
          if (contentResponse.ok) {
            return contentResponse.text();
          } else {
            throw new Error(contentResponse.statusText);
          }
        }
      );
      const metadataParserResult = metadataParser(content);

      setRecipe({
        content: metadataParserResult.content
          ? metadataParserResult.content
          : content,
        originalContent: content,
        metadata: metadataParserResult.metadata,
        fallbackRecipeTitle: filename.replaceAll(".md", ""),
        slug: id,
      });
      setLoading(false);
    };

    loadRecipe();
  }, [id]);

  return (
    <div className="Container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="Subtitle">{RecipeTitle(recipe)}</h2>
          {RecipePhoto(recipe)}
          <MarkdownRenderer content={recipe.content} />
          <hr></hr>
          <p>Debug</p>
          <hr></hr>
          {recipe.originalContent}
          <hr></hr>
          {recipe.content}
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
