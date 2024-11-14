-- Suppression des tables existantes
DROP TABLE IF EXISTS "coffee";
DROP TABLE IF EXISTS "category";

-- Création de la table "category"
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL
);

-- Création de la table "coffee"
CREATE TABLE "coffee" (
    "id" SERIAL PRIMARY KEY, 
    "name" VARCHAR(100) NOT NULL, 
    "description" TEXT,
    "reference" VARCHAR(20) UNIQUE NOT NULL,
    "origin" VARCHAR(100),
    "price-per-kg" DECIMAL(6,2),
    "available" BOOLEAN,
    "category_id" INTEGER NOT NULL REFERENCES "category"("id")
);

-- Note : NOT NULL ====> Si on essaie d'insérer un coffee sans lui mettre de name, la commande ne fonctionnera pas !



-- Insertion des données dans la table "category"
INSERT INTO "category" ("name") VALUES
('Corsé'),
('Acide'),
('Fruité'),
('Doux'),
('Épicé'),
('Chocolaté');

-- Insertion des données dans la table "coffee"
INSERT INTO "coffee" ("name", "description", "reference", "origin", "price-per-kg", "available", "category_id") VALUES
('Espresso','Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu', '100955890', 'Italie', 20.99, TRUE, 1),
('Columbian','Café moyennement corsé avec une acidité vive et une saveur riche', '100955894', 'Colombie', 18.75, TRUE, 2),
('Ethiopian Yirgacheffe', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', '105589090', 'Éthiopie', 22.50, TRUE, 3),
('Brazilian Santos','Café doux et lisse avec un profil de saveur de noisette.', '134009550', 'Brésil', 17.80, TRUE, 4),
('Guatemalan Antigua','Café corsé avec des nuanCafé complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', '295432730', 'Kenya', 23.70, TRUE, 2),
('Sumatra Mandheling','Café profond et terreux avec un corps lourd et une faible acidité.', '302932754', 'Indonésie', 19.95, TRUE, 1),
('Costa Rican Tarrazu','Café vif et net avec une finition propre et une acidité vive.', '327302954', 'Costa Rica', 24.50, TRUE, 2),
('Vietnamese Robusta','Café audacieux et fort avec une saveur robuste distinctive.', '549549090', 'Vietnam', 16.75, TRUE, 5),
('Tanzanian Peaberry','Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', '582954954', 'Tanzanie', 26.80, TRUE, 3),
('Jamaican Blue Mountain','Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', '589100954', 'Jamaïque', 39.25, TRUE, 4),
('Rwandan Bourbon','Café avec des notes florales prononcées, une acidité vive et un corps moyen.', '650753915', 'Rwanda', 21.90, TRUE, 3),
('Panamanian Geisha','Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', '795501340', 'Panama', 42.00, TRUE, 3),
('Peruvian Arabica','Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', '954589100', 'Pérou', 19.40, FALSE, 6),
('Hawaiian Kona','Café rare au goût riche, une acidité de Café avec des notes de fruits, une acidité vive et un corps plein.', '691550753', 'Nicaragua', 28.60, FALSE, 3);
