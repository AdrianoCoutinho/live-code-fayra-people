import axios from 'axios';

export const getAllPeople = async () => {
    try {
        const result = await axios.get('https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people')
        return result.data;
    } catch (error) {
        console.log(error)
    }
}

export const getPerson = async (name: string): Promise<any> => {
    try {
        const result = await axios.get('https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people')
        const person = result.data;
        const resultPerson = person.filter((value: any) => {
            return value.name.toLowerCase() === name.toLowerCase()
        });
        return resultPerson;
        
    } catch (error) {
        console.log(error)
    }
}


export const getPersonByPhone = async (phone: string): Promise<any> => {
    try {
        const result = await axios.get('https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people')
        const person = result.data;
        const resultPerson = person.filter((value: any) => {
            return value.phone === phone
        });
        if(resultPerson === undefined) {
            return {
                ok: false,
                message: "Pessoa não encontrada ou não existente"
            }
        }
        return resultPerson;
        
    } catch (error) {
        console.log(error)
    }
}