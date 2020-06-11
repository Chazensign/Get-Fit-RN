
INSERT INTO user_foods(
                       user_id,
                       consumed_date,
                        meal,
                        brand_name,
                        food_name,
                        serving_unit,
                        serving_qty, 
                        cals, 
                        fat, 
                        carbs, 
                        fiber, 
                        protein)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);

  SELECT * FROM user_foods
  WHERE user_id = 1;