import client from "./database-client.js";


export async function getAllCoffeeProducts() {
  const result= await client.query('SELECT * FROM "coffee"');
  const coffees = result.rows;
  return coffees;
};

export async function getOneCoffee(coffeeId) {
  const result= await client.query(`SELECT * FROM "coffee" WHERE "id" = $1`, [coffeeId]);
  const coffee = result.rows[0];
  return coffee;
};

export async function getLastThreeCoffee(){
  const result= await client.query('SELECT * FROM "coffee" ORDER BY "id" DESC LIMIT 3');
  const LastThreeCoffee = result.rows;
  return LastThreeCoffee;
};
