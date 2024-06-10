CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    category_id INTEGER,
    sub_category_id INTEGER,
    credit_card_id INTEGER,
    accrual_date TEXT NOT NULL,
    payment_date TEXT,
    payment_status TEXT CHECK( payment_status IN ('PENDING', 'PAID', 'OVERDUE') ) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    FOREIGN KEY (sub_category_id) REFERENCES SubCategories(id),
    FOREIGN KEY (credit_card_id) REFERENCES CreditCard(id)
)
