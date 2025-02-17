import { createContext, useContext, useState } from "react";

interface recipeContextType {
    rawRecipe : string;
    setRawRecipe : Function,

}

const RecipeContext = createContext<recipeContextType>({
    rawRecipe : "",
    setRawRecipe : (x : string) => (""),
});

type Props = {
    children : any;
}

export const RecipeProvider = ({children} : Props) => {

    const [rawRecipe, setRawRecipe] = useState("");



    const value = {
        rawRecipe,
        setRawRecipe
    }

    return (
        <RecipeContext.Provider
            value={
                value
            }
        >
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipe = () => {
    return useContext(RecipeContext);
}