import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor(){
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                this.changeActiveLink(link);
                const category =link.getAttribute('data-category');   /* ==  link.dataset.category */
                this.getGames(category);
            })
        });
        this.ui = new Ui();
        this.loading = document.querySelector('.loading');
        this.details = document.getElementById('details');
        this.games = document.getElementById('games');
        this.getGames('mmorpg');
    }



    async changeActiveLink(link){
        document.querySelector('.navbar-nav .active').classList.remove('active');
        link.classList.add('active');
    }

    



    async getGames(cate){
        this.loading.classList.remove('d-none');
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b8baaf0943mshda49b73e7146fa0p16573ejsn66d1bc1721c8',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cate}`, options);
    const response = await api.json();
    this.loading.classList.add('d-none');

    this.ui.displayGames(response);
    

    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click' , () =>{
            this.details.classList.remove('d-none');
            this.games.classList.add('d-none');
            new Details(card.dataset.id);   /*card.getAttribute('data-id') */
        });
    });
}
}
