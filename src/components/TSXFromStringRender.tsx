// import {transform} from '@babel/standalone';
import { useRecipe } from "@/context/RecipeContext"
import parse from "html-react-parser"

type Props = {
  cn: string
}

export default function TSXFromStringRender({ cn }: Props) {
  const { rawRecipe } = useRecipe()
  // const transpiledTSX = transform(exampleText, {
  //     presets: ['typescript', 'react'],
  //     filename : "file.txt",
  // }).code;

  // const RenderedComponent = eval(transpiledTSX as string);

  // adding a custom classname so we can call it '.rendered-recipe-window' or something and style its parts in globalas
  return <div className={`rendered-text ${cn}`}>{parse(rawRecipe)}</div>
}
