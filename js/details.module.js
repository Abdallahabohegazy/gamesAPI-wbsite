import { Ui } from "./ui.module.js";

export class Details {
    constructor(gameId){
        document.getElementById('btnClose').addEventListener('click' , () => {
            document.getElementById('details').classList.add('d-none');
            document.getElementById('games').classList.remove('d-none');
        })
        this.loading = document.querySelector('.loading');
        this.getDetails(gameId);
    };


    async getDetails(gameId){
        this.loading.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b8baaf0943mshda49b73e7146fa0p16573ejsn66d1bc1721c8',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}` , options);
        const response = await api.json();
        this.loading.classList.add('d-none');
        console.log(response);

        new Ui().displayDetailsGames(response);
    }
}


