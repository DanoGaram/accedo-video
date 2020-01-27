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
        super('https://demo5520281.mockable.io/movies');
    }
    //Add some additional methods
}
export let moviesApi = new MovieApiResources();

class HistoryApiResources extends BaseApiResources{
    constructor(){
        super('');
    }
    //Add some additional methods
    addWatchedVideo = (video) => {
        let history = this.getWatchedVideos();
        history.unshift(video);
        localStorage.setItem('historyVideos', JSON.stringify(history));
    }
    getWatchedVideos = () => {
        const history = JSON.parse(localStorage.getItem('historyVideos')|| null);
        return history && history.length > 0 ? history : [];
    }
    clearHistory = () => {
        localStorage.setItem('historyVideos', JSON.stringify([]));
    }
}
export let historyApi = new HistoryApiResources();
