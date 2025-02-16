export type LLMResponseData = {
    response : any
}

export type LLMResponse = {
    code : number,
    err? : string,
    message? : string,
    data? : LLMResponseData
}