insert into user_exs(user_id, ex_id, modifications, notes, reps,
                     sets, weight, hr, min, sec)
values($1,
       $2,
       $3,
       $4,
       $5,
       $6,
       $7,
       $8,
       $9,
       $10);

select user_ex_id,
       u.ex_id,
       exercise,
       equipment,
       exercisetype,
       majormuscle,
       minormuscle,
       coalesce(u.modifications, e.modifications) as modifications,
       COALESCE(u.notes, e.notes) as notes,
       example,
       reps,
sets,
       weight,
       hr,
       min,
       sec
from user_exs u
join exercises e on e.ex_id = u.ex_id
where user_id = $1;