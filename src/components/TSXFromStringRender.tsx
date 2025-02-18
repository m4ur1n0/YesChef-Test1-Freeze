// import {transform} from '@babel/standalone';
import parse from "html-react-parser";

type Props = {
    renderedContent : string;
    cn : string;
}

const exampleText = `
<div>
<h1>Saag Paneer Recipe</h1>

<h2>Ingredients</h2>
<ul>
  <li>500g fresh spinach (palak)</li>
  <li>200g paneer, cubed</li>
  <li>2 tbsp ghee or oil</li>
  <li>1 large onion, finely chopped</li>
  <li>2 tomatoes, pureed</li>
  <li>2 green chilies, slit</li>
  <li>1 tbsp ginger-garlic paste</li>
  <li>1 tsp cumin seeds</li>
  <li>1 tsp turmeric powder</li>
  <li>1 tsp coriander powder</li>
  <li>1 tsp garam masala</li>
  <li>1/2 tsp red chili powder</li>
  <li>1/4 cup fresh cream (optional)</li>
  <li>Salt to taste</li>
</ul>

<h2>Instructions</h2>
<ol>
  <li>Wash the spinach thoroughly and blanch it in boiling water for 2-3 minutes. Drain and blend into a smooth puree. Set aside.</li>
  <li>Heat 1 tbsp ghee or oil in a pan and lightly fry the paneer cubes until golden. Remove and set aside.</li>
  <li>In the same pan, add the remaining ghee or oil. Add cumin seeds and let them splutter.</li>
  <li>Add the chopped onions and sauté until golden brown. Stir in the ginger-garlic paste and green chilies, cooking for another minute.</li>
  <li>Add the tomato puree and cook until the oil separates from the mixture.</li>
  <li>Stir in the turmeric powder, coriander powder, red chili powder, and salt. Cook for 2-3 minutes.</li>
  <li>Add the spinach puree and mix well. Cook for 5-7 minutes on medium heat.</li>
  <li>Add the fried paneer cubes and garam masala. Mix gently and simmer for 2-3 minutes.</li>
  <li>If using, stir in the fresh cream and cook for another minute.</li>
  <li>Serve hot with naan or rice.</li>
</ol>

<p>Enjoy your homemade Saag Paneer!</p>
</div>`


export default function TSXFromStringRender({renderedContent, cn}: Props) {

    const x = renderedContent;
    // const transpiledTSX = transform(exampleText, {
    //     presets: ['typescript', 'react'],
    //     filename : "file.txt",
    // }).code;

    // const RenderedComponent = eval(transpiledTSX as string);


    // adding a custom classname so we can call it '.rendered-recipe-window' or something and style its parts in globalas
  return (
    <div className={`rendered-text ${cn}`}>
        {parse(exampleText)}
    </div>
  )
}