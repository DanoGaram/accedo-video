import Axios from "axios";

class BaseApiResources {
    constructor(url){
        this.url = url;
    }
    makeRequest = (additionalProps) => {
        return Axios({
            url: this.url,
            ...additionalProps
        });
    }
    query = (query) => {
        return this.makeRequest({params: query, method: 'GET'});
    }
    get = () => {
        return this.makeRequest({method: 'GET'});
    }
}

class MovieApiResources extends BaseApiResources{
    constructor(){
        super('movies.json');
        console.log('nueva instancia users');
    }
    //Add some additional methods
    papas = () => console.log('karen sucks');
}
export let moviesApi = new MovieApiResources();

class AccountHttpResources extends BaseApiResources{
    constructor(){
        super('/api/account');
        console.log('nueva instancia accounts');
    }
    //Add some additional methods
}
export let accountHttp = new AccountHttpResources();