user (
    #id            -- integer, primary key (PK)
    firstname      -- string
    lastname       -- string
    email          -- string, unique
    password       -- string
    is_admin       -- boolean
    message        -- text
    is_contact     -- boolean,
)

category (
    #id            -- integer, primary key (PK)
    name           -- string
)

coffee (
    #id            -- integer, primary key (PK)
    name           -- string
    description    -- string
    reference      -- string, unique
    origin         -- string
    price_per_kg   -- decimal (6, 2)
    available      -- boolean
    category_id    -- integer, foreign key (FK) references category.id
)
