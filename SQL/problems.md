### 1- Combine Two Tables

Write an SQL query to report the first name, last name, city, and state of each person in the Person table. If the address of a personId is not present in the Address table, report null instead.

```sql
select Person.firstName, Person.lastName, Address.city, Address.state
from Person
left join Address on Person.personId = Address.personId
```

### 2- Employees Earning More Than Their Managers

https://leetcode.com/problems/employees-earning-more-than-their-managers/
Write an SQL query to find the employees who earn more than their managers.
Return the result table in any order.

```sql
select a.name as Employee
from Employee a
left join Employee b on a.managerId = b.id
where a.salary > b.salary
```

```sql
select a.name as Employee
from Employee a, Employee b
where a.managerId = b.id
and a.salary > b.salary
```

### 3- Find Customer Referee

https://leetcode.com/problems/find-customer-referee/
Write an SQL query to report the names of the customer that are not referred by the customer with id = 2.
Return the result table in any order.

```sql
select name
from Customer
where referee_id != 2 or referee_id is null
```

### 4- Big Countries

https://leetcode.com/problems/big-countries/
A country is big if:
it has an area of at least three million (i.e., 3000000 km2), or
it has a population of at least twenty-five million (i.e., 25000000).
Write an SQL query to report the name, population, and area of the big countries.
Return the result table in any order.

```sql
select name, population, area
from World
where area >= 3000000

union

select name, population, area
from World
where population >= 25000000
```

```sql
select name, population, area
from World
where (area >= 3000000 or population >= 25000000)
```

```sql
select name, population, area
from World
where area >= 3000000 or population >= 25000000
```

### 5- Recyclable and Low Fat Products

https://leetcode.com/problems/recyclable-and-low-fat-products/description/?envType=study-plan&id=sql-i
Write an SQL query to find the ids of products that are both low fat and recyclable.
Return the result table in any order.
The query result format is in the following example.

```sql
select product_id
from products
where low_fats = 'Y' and recyclable = 'Y'
```

### 6- Customers Who Never Order

https://leetcode.com/problems/customers-who-never-order/description/?envType=study-plan&id=sql-i
Write an SQL query to report all customers who never order anything.
Return the result table in any order.
The query result format is in the following example.

```sql
select name as customers from Customers
where id not in (select customerId from Orders)
```

### 7- Calculate Special Bonus

```sql
select employee_id, (name not like 'M%') * (employee_id % 2) * (salary) as bonus
from Employees
order by employee_id
```

```sql
select employee_id,
case when (employee_id%2 = 1 and name not like 'M%') then salary
else 0
end as bonus
from Employees
order by employee_id
```

### 8- Swap Salary

```sql
update Salary set sex =
case sex
  when 'm' then 'f'
  else 'm'
end
```

```sql
update salary set sex = CHAR(ASCII('f') ^ ASCII('m') ^ ASCII(sex));
```

### 9- Duplicate Emails

```sql
select Email
from Person
group by Email
having count(Email) > 1
```

```sql
delete p1 from Person p1, Person p2
where p1.email = p2.email and p1.id > p2.id
```

Input:
Person table:
+----+------------------+
| id | email |
+----+------------------+
| 1 | john@example.com |
| 2 | bob@example.com |
| 3 | john@example.com |
+----+------------------+

=> From Person p1, Person p2 : it would look like:
1|john@example.com|1|john@example.com
1|john@example.com|2|bob@example.com
1|john@example.com|3|john@example.com

2|bob@example.com|1|john@example.com
2|bob@example.com|2|bob@example.com
2|bob@example.com|3|john@example.com

3|john@example.com|1|john@example.com
3|john@example.com|2|bob@example.com
3|john@example.com|3|john@example.com

=> From Person p1, Person p2 where p1.email=p2.email and p1.id>p2.id:
It would look like:
3|john@example.com|1|john@example.com

Now delete this row's matching row in p1 using p1: delete p1
