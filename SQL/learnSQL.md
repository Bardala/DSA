# Learning SQL

## Some of The Most Important SQL Commands

    SELECT - extracts data from a database
    UPDATE - updates data in a database
    DELETE - deletes data from a database
    INSERT INTO - inserts new data into a database
    CREATE DATABASE - creates a new database
    ALTER DATABASE - modifies a database
    CREATE TABLE - creates a new table
    ALTER TABLE - modifies a table
    DROP TABLE - deletes a table
    CREATE INDEX - creates an index (search key)
    DROP INDEX - deletes an index

### SQL SELECT Statement

- ex: SELECT \* FROM table-name;
- ex: SELECT name, id FROM user;

### SQL SELECT DISTINCT

The SELECT DISTINCT statement is used to return only distinct (different) values.
Inside a table, a column often contains many duplicate values; and sometimes you only want to list the different (distinct) values.

- ex: SELECT DISTINCT country FROM customer;

### SQL WHERE Clause

The WHERE clause is used to filter records.

It is used to extract only those records that fulfill a specified condition.

- ex: SELECT c1, c2 FROM table_name WHERE condition;
- ex: SELECT \* FROM customer WHERE country='Egypt';

#### Operators in The WHERE Clause

= Equal

>     Greater than
>
> < Less than
> = Greater than or equal
> <= Less than or equal
> <> Not equal. Note: In some versions of SQL this operator may be written as !=
> BETWEEN Between _ AND _ a certain range
> LIKE Search for a pattern
> IN To specify multiple possible values for a column

- ex: SELECT \* FROM Products WHERE Price BETWEEN 50 AND 60;
- ex: SELECT \* FROM Customers WHERE City LIKE 's%';
- ex: SELECT \* FROM Customer WHERE City IN ('Paris', 'London');

### SQL AND, OR and NOT Operators

- ex: SELECT \* FROM customer WHERE country='Egypt' AND city='Cairo';
- ex: SELECT \* FROM customer WHERE OR ;
- ex: SELECT \* FROM products WHERE NOT country='Germany';

### SQL ORDER BY Keyword

The ORDER BY keyword is used to sort the result-set in ascending or descending order.
The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword.

- ex: SELECT \* FROM customers ORDER BY country, customerName
- ex: SELECT \* FROM customers ORDER BY country ASC, customerName DESC
- ex: SELECT \* FROM customers ORDER BY country DESC

### The SQL INSERT INTO Statement

The INSERT INTO statement is used to insert new records in a table.

#### INSERT INTO Syntax

It is possible to write the INSERT INTO statement in two ways:

1. Specify both the column names and the values to be inserted:
   INSERT INTO table_name (column1, column2, column3, ...)
   VALUES (value1, value2, value3, ...);

2. If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows:
   INSERT INTO table_name
   VALUES (value1, value2, value3, ...);

- ex: INSERT INTO customers (name, city, address, country)
  VALUES ('Islam', 'Cairo', 'El-Shorouck', 'Egypt');

-ex: INSERT INTO customers VALUES ('44','Islam', 'Cairo', 'El-Shorouck', 'Egypt')

### SQL NULL Values

A field with a NULL value is a field with no value.

If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a NULL value.

### How to Test for NULL Values?

We will have to use the IS NULL and IS NOT NULL operators instead.

SELECT column_names
FROM table_name
WHERE column_name IS NULL;

SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

- ex: SELECT customerName, contactName, Address FROM customers WHERE address IS NULL;
- ex: SELECT customerName, contactName, Address FROM customers WHERE address IS NOT NULL;

### SQL UPDATE Statement

The UPDATE statement is used to modify the existing records in a table.

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

#### UPDATE Table

- ex: UPDATE customers SET name='islam', city='Cairo' WHERE customerId = 1;

#### UPDATE Multiple Records

- ex: UPDATE customers SET city='Cairo' WHERE country='Egypt';

### SQL DELETE Statement

The DELETE statement is used to delete existing records in a table.

DELETE FROM table_name WHERE condition;

```sql
DELETE FROM customer WHERE customerName='Ali';
DELETE FROM Customers;
```

### SQL TOP, LIMIT, FETCH FIRST or ROWNUM Clause (Not studied yet)

The SELECT TOP clause is used to specify the number of records to return.

The SELECT TOP clause is useful on large tables with thousands of records. Returning a large number of records can impact performance.

SQL Server / MS Access Syntax:

```sql
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;
```

### SQL MIN() and MAX() Functions

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;

SELECT MAX(column_name)
FROM table_name
WHERE condition;

select min(price) as smallestPrice from products
```

### SQL COUNT(), AVG() and SUM() Functions

The COUNT() function returns the number of rows that matches a specified criterion.

The AVG() function returns the average value of a numeric column.

The SUM() function returns the total sum of a numeric column.

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;

SELECT AVG(column_name)
FROM table_name
WHERE condition;

SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

### SQL Joins

A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

#### Different Types of SQL JOINs

- (INNER) JOIN: Returns records that have matching values in both tables
- LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
- RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

### SQL INNER JOIN Keyword

The INNER JOIN keyword selects records that have matching values in both tables

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

```sql
select orders.orderID, customer.customerName
from orders
inner join customers on orders.customerID = customers.customerID
```

Note: The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns. If there are records in the "Orders" table that do not have matches in "Customers", these orders will not be shown!

```sql
# JOIN THREE TABLES
select orders.orderId, customer.customerName, shipper.shipperName
from ((orders
inner join customers on orders.customerId = customer.customerId)
inner join shippers on orders.shipperId = shipper.shipperId)
```

### SQL LEFT JOIN Keyword

The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

```sql
select customers.customerName, orders.orderId
from customers
left join orders on customers.customerId = orders.customerId
order by customers.customerName
```

Note: The LEFT JOIN keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders).

### SQL RIGHT JOIN Keyword

The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 records from the left side, if there is no match.

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

```sql
select orders.orderId, employees.firstName, employees.lastName
from orders
right join employees on orders.employeeId = employees.employeeId
order by orders.orderId
```

### SQL FULL OUTER JOIN Keyword

The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
Tip: FULL OUTER JOIN and FULL JOIN are the same.

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;
```

Note: FULL OUTER JOIN can potentially return very large result-sets!

```sql
select customers.customerName, orders.orderId
from customers
full join orders on customer.customerId = orders.customerId
order by customers.customerName
```

Note: The FULL OUTER JOIN keyword returns all matching records from both tables whether the other table matches or not. So, if there are rows in "Customers" that do not have matches in "Orders", or if there are rows in "Orders" that do not have matches in "Customers", those rows will be listed as well.

Note: see CROSS JOIN in mySQL

### SQL Self Join

A self join is a regular join, but the table is joined with itself.

```sql
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;
```

T1 and T2 are different table aliases for the same table.

```sql
select a.customerName as customerA, b.customerName as customerB, a.city
from customers a, customers b
where customerA <> customerB
and a.city = b.city
order by a.city
```

the above code returns the customers which are from the same city

### SQL CASE Expression

The CASE expression goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.
If there is no ELSE part and no conditions are true, it returns NULL.

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```

```sql
select customerName, city,
case
    when city = 'Berlin' then 'Germany'
    when city = 'Madrid' then 'Spain'
    else 'Other'
end as country
from customers
```

```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

```sql
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);
```

### SQL UNION Operator

The UNION operator is used to combine the result-set of two or more SELECT statements.

Each SELECT statement within UNION must have the same number of columns
The columns must also have similar data types
The columns in each SELECT statement must also be in the same order

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

#### UNION ALL Syntax

The UNION operator selects only distinct values by default. To allow duplicate values, use UNION ALL:

```sql
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
```

The following SQL statement returns the German cities (only distinct values) from both the "Customers" and the "Suppliers" table

```sql
select customerName, city, country
from customers
where country = 'Germany'
union
select customerName, city, country
from customers
where country = 'France'
```

for duplicates values, use UNION ALL

```sql
select city, country from customers
where country = 'Germany'
union all
select city, country from Suppliers
where country = 'Germany'
order by city
```

### SQL GROUP BY Statement

The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```

```sql
select count(CustomerID), Country
from Customers
group by Country
```

```sql
select count(CustomerID) as counts, Country
from Customers
group by Country
order by counts desc
```

```sql
select Shippers.ShipperName, count(Orders.orderID) as NumberOfOrders
from Orders left join Shippers
on Orders.ShipperID = Shippers.ShipperID
group by Shippers.ShipperName
order by NumberOfOrders desc
```

### The SQL HAVING Clause

The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

### CONCAT() Function

The CONCAT() function is used to combine two or more text values.

```sql
SELECT CONCAT(column1, column2, column3, ...)
FROM table_name;
```

```sql
select concat(firstName, ' ', lastName) as fullName
from employees
```

```SQL
select
user_id,
concat(
  upper(
    left(name, 1)
  ),
  lower(
    substring(name, 2)
  )
)
as name
from Users
order by user_id
```

### GROUP_CONCAT Function

the difference between CONCAT() and GROUP_CONCAT() is that GROUP_CONCAT() can be used with GROUP BY, distinct, order by, and separator.

The GROUP_CONCAT() function in MySQL is used to concatenate data from multiple rows into one field. This is an aggregate (GROUP BY) function which returns a String value, if the group contains at least one non-NULL value. Otherwise, it returns NULL.

```sql
SELECT col1, col2, ..., colN
GROUP_CONCAT ( [DISTINCT] col_name1
[ORDER BY clause]  [SEPARATOR str_val] )
FROM table_name GROUP BY col_name2;
```

```sql
SELECT GROUP_CONCAT(column_name)
FROM table_name
WHERE condition
GROUP BY column_name(s);
```

```sql
select GROUP_CONCAT(firstName, ' ', lastName) as fullName
from employees
```

```sql
select
sell_date,
count(distinct product) as num_sold,
group_concat(distinct product) as products
from activities
group by sell_date
```
