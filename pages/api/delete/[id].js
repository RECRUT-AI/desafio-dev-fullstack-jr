const { createClient } = require('@supabase/supabase-js');
import supabase from '../../../utils/supabase'
const { SUPABASE_KEY, supabaseUrl, tableName} = supabase;
const supabaseClient = createClient(supabaseUrl, SUPABASE_KEY);

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const updatedParam = req.body;

    supabaseClient
      .from(tableName)
      .delete()
      .match({ name: id })
      .then((data) => {
        res.status(200).json({data: data}); // update this line
      })
      .catch(err => {
        res.status(500).json(err);
      })

  } else {
    res.status(500).json({error: 'Wrong method call for this path'});
  }
}
