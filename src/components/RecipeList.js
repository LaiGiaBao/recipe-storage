import "./RecipeList.css";

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { projectFirestore } from "../firebase/config";
import deleteIcon from "../assets/delete-icon.svg";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3 className="recipe__header">{recipe.title}</h3>
          <p className="recipe__caption">{recipe.cookingTime} to make</p>
          <div className="recipe__body">
            {recipe.method.substring(0, 100)}...
          </div>
          <Link to={`/recipes/${recipe.id}`} className="recipe__link">
            Cook This
          </Link>
          <img
            src={deleteIcon}
            className="recipe__delete"
            onClick={() => handleClick(recipe.id)}
            alt="delete button"
          />
        </div>
      ))}
    </div>
  );
}
