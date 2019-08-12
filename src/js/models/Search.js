import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

     async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'b87fba53d6b13f3de5f3bbd65043f897';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        }
        catch (error){
            alert(error);
        }
        
    }
}

