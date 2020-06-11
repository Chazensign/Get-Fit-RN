INSERT INTO exercises(Exercise, Equipment, ExerciseType ,MajorMuscle ,MinorMuscle ,Example ,Notes ,Modifications)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING ex_id;
