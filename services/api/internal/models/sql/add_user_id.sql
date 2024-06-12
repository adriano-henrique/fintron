ALTER TABLE Categories 
ADD COLUMN user_id TEXT;

ALTER TABLE expenses
ADD COLUMN user_id TEXT;