
update user_exs
set notes = $2,
modifications = $3,
reps = $4,
sets = $5,
weight = $6,
hr = $7,
min = $8,
sec = $9
where user_ex_id = (
  select user_ex_id
from user_exs
where user_id = $10
  and ex_id = $11
);

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
where user_id = $10;