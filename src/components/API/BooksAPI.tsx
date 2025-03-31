import axios from 'axios';

export const GetNewReleasedBooks = async (): Promise<any[]> => {
    try {
        const response = await axios.get('http://10.5.0.2:3000/books/getNewReleasedBooks', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            timeout: 10000, // 10-second timeout
        });
        return response.data; // Ensure you return only the data
    } catch (error) {
        console.error('Error fetching new releases:', error);
        return []; // Return an empty array in case of an error
    }
};


export const GetAllBooks = async () : Promise<any[]> => {
    try{
        const response = await axios.get('http://10.5.0.2:3000/books/', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            timeout: 10000, // 10-second timeout
        })
        return response.data;
    } catch (error) {
        console.error('Error fetching all books:', error);
        return []; // Return an empty array in case of an error
    }
}
