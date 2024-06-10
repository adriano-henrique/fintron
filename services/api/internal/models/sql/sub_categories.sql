CREATE TABLE SubCategories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);