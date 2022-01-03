import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useTheme } from "../../hooks/useTheme";
import { projectStorage } from "../../firebase/config";
import "./Recipe.css";

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);
  const { mode } = useTheme();
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    const unsub = projectStorage
      .collection("recipes")
      .doc(id)
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          setRecipe(snapshot.data());
          setIsPending(false);
        } else {
          setError(error);
          setIsPending(false);
        }
      });

    return () => unsub();
  }, [id, error]);

  const updateRecipe = () => {
    projectStorage.collection("recipes").doc(id).update({
      title: "Updated title 44",
    });
  };

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={updateRecipe}>Update me</button>
        </>
      )}
    </div>
  );
}
