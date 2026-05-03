export async function getProducts(){ 
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
        return result.products;
    } catch (error) {
        const message = error instanceof Error? error.message : String(error);
        console.error(message);
    }
}