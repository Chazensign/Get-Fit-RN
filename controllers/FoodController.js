module.exports = {
  addFood: async (req, res) => {
    // const { userId } = req.session.user
    const {
      date,
      meal,
      brand_name,
      food_name,
      serving_unit,
      serving_qty,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_dietary_fiber,
      nf_protein,
    } = req.body;
    const db = await req.app.get('db');
    db.add_user_food(
      1,
      date,
      meal,
      brand_name,
      food_name,
      serving_unit,
      serving_qty,
      nf_calories,
      nf_total_fat,
      nf_total_carbohydrate,
      nf_dietary_fiber,
      nf_protein,
    )
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send(err));
  },
};
