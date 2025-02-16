import axios from "axios";


const hugging_face_url = import.meta.env.VITE_APP_HUGGING_FACE_API_URL;
const hugging_face_key = import.meta.env.VITE_APP_HUGGING_FACE_API_KEY;

function handleError(err : any, message : string) {
    console.error(`ERROR : ${message} - ${err}`);
    return "";
}

export const queryHuggingFace = async (query : string, model? : string) => {

    if (!model || model === undefined) {
        model = 'gpt2';
    }

    try {
        const response = await fetch(
            `${hugging_face_url}/${model}`,
            {
                method: 'POST',
                headers: {
                Authorization: `Bearer ${hugging_face_key}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({inputs : query , wait_for_model : true}),
            }
        )

        return await response.json();

    } catch (err) {
        return handleError(err, "Error ocurred during Hugging Face query.")
    }

}