import { useRecipe } from '@/context/RecipeContext';
import MarkdownIt from 'markdown-it';
import React, { JSX, useEffect, useState } from 'react';


function renderJSXString(jsxString: string): JSX.Element {
    try {
      const render = eval(`(React) => ${jsxString}`);
      return render(React);
    } catch (error) {
      console.error("Error rendering JSX string:", error);
      return <></>;
    }
  }

export const MarkdownRender = () => {
    const {rawRecipe} = useRecipe();
    const [recipeStr, setRecipeStr] = useState<string>("");

    let md = new MarkdownIt();
    
    useEffect(() => {
        setRecipeStr(md.render(rawRecipe));
    }, [rawRecipe]);


  return (
    <div className='markdown-rendered-from-raw-string'>
        {
            renderJSXString(recipeStr as string)
        }
    </div>
  )
}