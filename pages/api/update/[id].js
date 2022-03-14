import supabase from '../../../utils/supabase'
const { SUPABASE_KEY, supabaseUrl, tableName} = supabase;
const { createClient } = require('@supabase/supabase-js');
const supabaseClient = createClient(supabaseUrl, SUPABASE_KEY);

export default function handler(req, res) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const updatedParam = req.body;

    supabaseClient
      .from(tableName)
      .update(updatedParam)
      .match({ name: id })
      .then((data) => {
        res.status(200).json({data: data});
      })
      .catch(err => {
        res.status(500).json(err);
      })
  } else {
    res.status(500).json({error: 'Wrong method call for this path'});
  }
}
