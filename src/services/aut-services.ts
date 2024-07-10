import { UserData } from "../interfaces/UserData";

const  API_URL = '192.168.1.104:3000'; 
export async function registerUser(userData: UserData): Promise<void>{

    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const   regResponse= await fetch(`${API_URL}/register`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (!regResponse.ok) {
            throw new Error(`Network response was not ok: ${regResponse.statusText}` );
        } else {
            
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    throw error;
    }
}