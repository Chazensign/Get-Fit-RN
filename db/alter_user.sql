update users
set username = $2,
email = $3 ,
password = $4,
temp_password = $5
where user_id = $1;

select * from users
where user_id = $1;