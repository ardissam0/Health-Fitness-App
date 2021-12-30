import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Modal from "./Modal";

import '../CSS/App.css';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const { label, image, url, ingredients, dietLabels, healthLabels, totalDaily, totalNutrients, quantity, unit } = recipe.recipe;

  JSON.stringify(totalNutrients, totalDaily, label, quantity, unit);

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        COOKING DIRECTIONS
      </a>
      <button onClick={() => setShow(true)}>Ingredients</button>
      <Modal show={show} setShow={setShow}>
        <RecipeDetails ingredients={ingredients}/>
      </Modal>

      <button onClick={() => setShow2(true)}>Nutrients</button>
      <Modal show={show2} setShow={setShow2}>
            <div className="health__div">
                <div>
                    Nutrition Facts:
                {Object.keys(totalNutrients).map((keyName, i) => (
                    <p className= "ingredient-list" key={i}>
                        <span>{totalNutrients[keyName].label}: {Math.round(totalNutrients[keyName].quantity)}{totalNutrients[keyName].unit}</span>
                    </p>
                ))}
                </div>
            </div>
       </Modal>
       
      <button onClick={() => setShow3(true)}>Daily Value</button>
      <Modal show={show3} setShow={setShow3}>
            <div className="health__div">
                <div>
                    Percent of Daily Value:
                {Object.keys(totalDaily).map((keyName, i) => (
                    <p className= "ingredient-list" key={i}>
                        <span>{totalDaily[keyName].label}: {Math.round(totalDaily[keyName].quantity)}{totalDaily[keyName].unit}</span>
                    </p>
                ))}
                </div>
            </div>
        </Modal>

        <button onClick={() => setShow4(true)}>Health Labels</button>
        <Modal show={show4} setShow={setShow4}>
            <div className="health__div">
                <div> Diet: <br/> <p className= "ingredient-list">{dietLabels.join(', ')}</p></div> 
                <br/> 
                <div>Health: <br/> <p className= "ingredient-list">{healthLabels.join(', ')}</p></div>
            </div>
        </Modal>
    </div>
  );
};

export default Recipe;