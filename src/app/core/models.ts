// HOMEPAGE //
//HOME INPUTS
export interface homeInputs {
  searchInput: string;
  alphabet: string[];
  active: string;
}
// COCKTAILS BY NAME SEARCH
export interface RestApiCocktailByName {
  drinks: RestApidrinksByName[];
}

export interface RestApidrinksByName {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

export interface CocktailByName {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface CocktailByNameBool extends CocktailByName {
  selected: boolean;
}

// SPECIFIC DRINK PAGE //
//COCKTAIL DETAILS BY ID DRINK
export interface RestApiCocktailById {
  drinks: RestApiDrinkById[];
}

export interface RestApiDrinkById {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strGlass: string;
  strDrinkThumb: string;
  strInstructions?: string | null;
  strInstructionsES?: string | null;
  strInstructionsDE?: string | null;
  strInstructionsIT?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
}

export interface DrinkById {
  idDrink: string;
  name: string;
  category: string;
  glass: string;
  image: string;
  drinkIngr: drinkIngr[];
  drinkInstruction: drinkInstruction[];
}

interface drinkIngr {
  name?: string | null;
  measure?: string | null;
}

interface drinkInstruction {
  name?: string;
  langDes?: string;
}

// INGREDIENTS PAGE //
// LIST OF ALL INGREDIENTS

export interface RestApiListIngDrinks {
  drinks: RestApiListIngredients[];
}

export interface RestApiListIngredients {
  strIngredient1: string;
}

export interface ListIngredients {
  ingredient: string;
}

//DETAILS SPECIFIC INGREDIENT
export interface RestApiIngredient {
  ingredients: {
    strDescription: string;
  }[];
}

//DRINKS BY INGREDIENT
export interface RestApiDrinkByIngDrinks {
  drinks: RestApiDrinksByIng[];
}

export interface RestApiDrinksByIng {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface DrinksByIng {
  name: string;
  image: string;
  id: string;
}

//RESOLVE OBJECT
export interface ResolveIngredientObject {
  ingredientsList: ListIngredients[];
  ingredientDetails: { strDescription: string };
  ingredientDrinks: DrinksByIng[];
}
