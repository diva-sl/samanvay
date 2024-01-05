/* problem 1 psql */
/* most regular maximum attendance */
select 
  name, 
  count(*) maximum_attendance 
from 
  employee 
  inner join attendance_register on attendance_register.employee_id = employee.id 
group by 
  1 
order by 
  maximum_attendance desc 
limit 
  1 

  
 /*more irregular attendance*/
select 
  name, 
  count(*) minimum_attendance 
from 
  employee 
  inner join attendance_register on attendance_register.employee_id = employee.id 
group by 
  1 
order by 
  minimum_attendance asc 
limit 
  1;
