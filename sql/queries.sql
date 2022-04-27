--------- QUERY 01 ---------

-- database example:
-- https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

-- select total of orders from a specific period, in this case, each month and present in different collumns.

select 
	e.firstName, x.orderID as julho, y.orderID as agosto 
from 
	(SELECT employeeID, count(orderID) as orderID, orderDate FROM [Orders] where orderDate like '%-07-%' group by customerID) as x, 
	(SELECT employeeID, count(orderID) as orderID, orderDate FROM [Orders] where orderDate like '%-08-%' group by customerID) as y 
left join
	employees e
on
	e.employeeID = x.employeeID
group by 
	x.employeeID 

--------- QUERY 02 ---------

