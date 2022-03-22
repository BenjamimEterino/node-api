import { Knex } from "knex";

export async function seed(knex:Knex) {
    await knex('items').insert([
        {title: "Papel", image: "papel.png"},
        {title: "Vidro", image: "vidro.png"},
        {title: "Oleo", image: "oleo.png"},
        {title: "Bateria", image: "bateria.png"},
        {title: "Eletronicos", image: "eletronico.png"},
    ]);
}