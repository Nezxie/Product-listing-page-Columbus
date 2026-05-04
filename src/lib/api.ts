import {Product} from '@/types/product'
import {APIResponse, Branding} from '@/types/api'

async function getAPIResponse():Promise<APIResponse|null>{
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
        return null;
    }
}
export async function getProducts():Promise<Product[]>{ 
    const result = await getAPIResponse();
    if(Array.isArray(result?.products)){
        return result.products;
    }
    return []
}

export async function getBranding():Promise<Branding>{
    const result = await getAPIResponse();
    const branding = {
        "logo":result?.logo||{url:"",altText:"Shop logo"},
        "title":result?.title||"Fallback shop name"
    }
    return branding;
}