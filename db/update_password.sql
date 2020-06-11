update users
password = $1
where user_id = $2;

select * from users
where email = $2;