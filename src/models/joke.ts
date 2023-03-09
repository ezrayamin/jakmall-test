export default class Category {
    error: boolean;
    amount: number;
    jokes: joke[];
    
    constructor(
        error: boolean,
        amount: number,
        jokes: joke[],
    ) {
        this.error = error;
        this.amount = amount;
        this.jokes = jokes;
    }
}

type joke = {
    category: string,
    type: string,
    joke: string,
    flags: flag[],
    id: number,
    safe: boolean,
    lang: string,
}

type flag = {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean,
}