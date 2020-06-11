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