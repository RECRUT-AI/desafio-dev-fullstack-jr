const { createClient } = require('@supabase/supabase-js');
import supabase from '../../../utils/supabase';
const { SUPABASE_KEY, supabaseUrl, tableName} = supabase;
const supabaseClient = createClient(supabaseUrl, SUPABASE_KEY);

const handler = async (req, res) => {
  const { id } = req.query;
  await supabaseClient
    .from(tableName)
    .select('*')
    .match({
      name: id
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

export default handler;