import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import TrashBin from "../../assets/trash-bin.svg";
import { projectStorage } from "../../firebase/config";

import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes found.</div>;
  }

  const deleteRecipe = (id) => {
    projectStorage.collection("recipes").doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete-icon"
            src={TrashBin}
            onClick={() => deleteRecipe(recipe.id)}
            alt="delete icon"
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
