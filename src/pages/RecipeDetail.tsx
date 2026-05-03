import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../MarkdownRenderer";
// @ts-ignore - if the library doesn't provide types, we can ignore or declare them
import metadataParser from "markdown-yaml-metadata-parser";
import recipeFiles from "../recipesFiles.json";

interface RecipeMetadata {
  title?: string;
  image?: string;
  [key: string]: any; // For any other YAML fields you might have
}

interface RecipeData {
  content: string;
  originalContent: string;
  metadata: RecipeMetadata;
  fallbackRecipeTitle: string;
  slug: string;
}

const RecipeTitle = (recipe: RecipeData): string => {
  if (recipe.metadata && recipe.metadata.title) {
    return recipe.metadata.title;
  }
  return recipe.fallbackRecipeTitle;
};

const RecipePhoto: React.FC<{ recipe: RecipeData }> = ({ recipe }) => {
  if (recipe.metadata && recipe.metadata.image) {
    return (
      <img
        className="RecipeDetailImage"
        src={`/img/${recipe.metadata.image}`}
        alt={`A photo of ${RecipeTitle(recipe)}`}
      />
    );
  }
  return null; // TS prefers null over an empty div for "render nothing"
};

export const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadRecipe = async (): Promise<void> => {
      const filename = (recipeFiles as string[]).find((file) => {
        const slug = file.replaceAll(".md", "").replaceAll(" ", "-");
        return slug === id;
      });

      if (!filename || !id) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/md/recipes/${filename}`);
        if (!response.ok) throw new Error("Recipe not found");

        const content = await response.text();
        const metadataParserResult = metadataParser(content);

        setRecipe({
          content: metadataParserResult.content || content,
          originalContent: content,
          metadata: metadataParserResult.metadata || {},
          fallbackRecipeTitle: filename.replaceAll(".md", ""),
          slug: id,
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error loading recipe:", error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [id]);

  return (
    <div className="Container">
      {loading ? (
        <p>Loading...</p>
      ) : recipe ? (
        <div>
          <h1 className="Subtitle">{RecipeTitle(recipe)}</h1>
          <RecipePhoto recipe={recipe} />
          <MarkdownRenderer content={recipe.content} />
        </div>
      ) : (
        <p>Recipe not found.</p>
      )}
    </div>
  );
};
