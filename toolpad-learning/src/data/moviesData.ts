export interface MovieItem {
    id: number;
    title: string;
    releaseYear: number;
    description: string;
    image: string;
    actors: string[];
}

export const moviesData: MovieItem[] = [
    {
        id: 1,
        title: "Inception",
        releaseYear: 2010,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",    
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY-KG6to1c6TnWtwLvFbPva_pqcffh7UlWiOCjmUFuA&s=10",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    },
    {
        id: 2,
        title: "The Dark Knight",
        releaseYear: 2008,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    },
    {
        id: 3,
        title: "Interstellar",
        releaseYear: 2014,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    }
];