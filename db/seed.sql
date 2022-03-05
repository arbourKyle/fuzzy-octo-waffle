INSERT INTO departments (name)
VALUES 
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 120000, 4),
('Salesperson', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1), 
('Accountant Manager', 160000, 2), 
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 3),
('Lawyer', 190000, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES

('Omar', 'Alexander', 1, null),
('Edward', 'Vega', 2, 1),
('Ann', 'Summers', 2, 1),
('Kenneth', 'Mendoza', 3, null),
('Eddie', 'Thompson', 4, 3),
('Alexandra', 'Rodriguez', 4, 3),
('Jerry', 'Harris', 5, null),
('Carrie', 'Rivera', 6, 5),
('Craig', 'Jones', 7, null),
('Shelby', 'Parker', 8, 7);