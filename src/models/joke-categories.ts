export default class JokesCategories {
    error: boolean;
    categories: string[];
    categoryAliases: categoryAlias[];
    timestamp: number;
    
    constructor(
        error: boolean,
        categories: string[],
        categoryAliases: categoryAlias[],
        timestamp: number,
    ) {
        this.error = error;
        this.categories = categories;
        this.categoryAliases = categoryAliases;
        this.timestamp = timestamp;
    }
}

type categoryAlias = {
    alias: string,
    resolved: string,
}