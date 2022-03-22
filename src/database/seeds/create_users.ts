import { Knex } from "knex";

export async function seed(knex:Knex) {
    await knex('users').insert([

        {email: "benjamim@gmail.com"},
        {name: "Benjamim"},
        {password: "1234"},
    ]);
}