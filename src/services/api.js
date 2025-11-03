const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";



 const fetchWordMeaning = async (inputValue) => {
    try{
        const response = await fetch(`${API_URL}${inputValue}`);
        if(!response.ok){
            throw new Error("Word not found");
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}
    export default fetchWordMeaning;