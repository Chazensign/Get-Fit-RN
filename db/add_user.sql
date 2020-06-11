insert into users(email, username, password)
values($1, $2, $3);

select username, user_id from users
where email = $1;