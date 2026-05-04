async function getAPIResponse(){
    try {
        const response = await fetch(`${process.env.API_URL}`,{
            headers: {
                'x-api-key': `${process.env.API_KEY}`
            }
        });
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        const message = error instanceof Error? error.message : String(error);
        console.error(message);
    }
}
export async function getProducts(){ 
    const result = await getAPIResponse();
    return result.products;
}
export async function getLogo(){ 
    const result = await getAPIResponse();
    return result.logo;
}