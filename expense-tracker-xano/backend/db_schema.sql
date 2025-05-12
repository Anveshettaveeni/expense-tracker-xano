-- Table: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Table: expenses
CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    title VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),
    expense_date DATE NOT NULL DEFAULT CURRENT_DATE
);