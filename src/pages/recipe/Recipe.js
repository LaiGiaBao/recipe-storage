import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Something completely different",
    });
  };

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("Recipe not found");
          setIsPending(false);
        } else {
          setRecipe(snapshot.data());
          setIsPending(false);
        }
      });
    return () => unsub();
  }, [id]);
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page__title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul className="list recipe__list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="recipe__item">
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="recipe__method">{recipe.method}</p>
          <button onClick={handleClick}>Update</button>
        </>
      )}
    </div>
  );
}
