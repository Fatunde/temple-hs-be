import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("doctor").del();
    await knex("slot").del();

    // Inserts seed entries
    await knex("doctor").insert([
        { id: 1, name: "Leo Stanton, MD", field: "Care Team Clinician Supervisor", about: "Dr. Leo Nieto is a board certified Internist with a broad experience treating both complex and simple medical conditions. He has been practicing for more than 10 years. He graduated from Tufts Univ...", image: "https://i.ibb.co/J2zwjs6/doctor1.png", enterprise_type: "Virtual visit only" },
        { id: 2, name: "Marcelino Kindred, MD", field: "Medical Doctor", about: "Dr. Marcelino is a board-certified Internal Medicine physician based in San Diego, CA. He received his Doctor of Osteopathic Medicine degree from Western University/COMP in Pomona, CA and completed...", image: "https://i.ibb.co/18skpZ7/doctor2.png", enterprise_type: "In-person visit only" },
        { id: 3, name: "Pat Alexander, DO", field: "Medical Doctor", about: "Dr. Pat Nieto is a Family Practice physician with Doctor on Demand. Dr. Mattis received her undergraduate degree from Smith College in 2004, and her medical degree from Columbia University in 2008...", image: "https://i.ibb.co/3YM3BqG/doctor3.png", enterprise_type: "Virtual visit only" },
        { id: 4, name: "Audrey Simmmons, MD", field: "Medical Doctor", about: "Dr. Audrey is a board certified Internist with a broad experience treating both complex and simple medical conditions. He has been practicing for more than 10 years. He graduated from Tufts Univ...", image: "https://i.ibb.co/3YM3BqG/doctor4.png", enterprise_type: "In-person visit only" },

    ]);

    await knex("slot").insert([
        { id: 1, doctor_id: 1, date: "2024-01-25:15:00:00", is_occupied: false },
        { id: 2, doctor_id: 1, date: "2024-01-25:18:30:00", is_occupied: false },
        { id: 3, doctor_id: 1, date: "2024-01-25:19:20:00", is_occupied: false },
        { id: 4, doctor_id: 2, date: "2024-01-25:15:00:00", is_occupied: false },
        { id: 5, doctor_id: 2, date: "2024-01-25:18:30:00", is_occupied: false },
        { id: 6, doctor_id: 2, date: "2024-01-25:19:20:00", is_occupied: false },
        { id: 7, doctor_id: 3, date: "2024-01-25:15:00:00", is_occupied: false },
        { id: 8, doctor_id: 3, date: "2024-01-25:18:30:00", is_occupied: false },
        { id: 9, doctor_id: 3, date: "2024-01-25:19:20:00", is_occupied: false },
        { id: 10, doctor_id: 4, date: "2024-01-25:15:00:00", is_occupied: false },
        { id: 11, doctor_id: 4, date: "2024-01-25:18:30:00", is_occupied: false },
        { id: 12, doctor_id: 4, date: "2024-01-25:19:20:00", is_occupied: false },
    ]);
};
