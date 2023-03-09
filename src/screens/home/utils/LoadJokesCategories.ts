import axios from "axios";
import Category from "../../../models/joke";
import JokesCategories from "../../../models/joke-categories";

const baseUrl = "https://v2.jokeapi.dev/";

export async function fetchJokesCategories(): Promise<JokesCategories> {
    try {
        const fetch = await axios.get(`${baseUrl}/categories`)
        const response = await fetch.data;

        return response
    }
    catch (err) {
        return {
            error: true,
            categories: [],
            categoryAliases: [],
            timestamp: Date.now()
        }
    }
}
export async function fetchSelectedCategory(category: string): Promise<Category> {
    const params = {
        type: 'single',
        amount: 2,
    }
    try {
        const fetch = await axios.get(`${baseUrl}/joke/${category}`, { params })
        const response = await fetch.data;

        return response
    }
    catch (err) {
        return {
            error: true,
            amount: 0,
            jokes: [],
        }
    }
}