import supabase from '../../../utils/supabase'
const { SUPABASE_KEY, supabaseUrl, tableName} = supabase;
const { v4: uuidv4 } = require('uuid');
const { createClient } = require('@supabase/supabase-js');
const supabaseClient = createClient(supabaseUrl, SUPABASE_KEY);

export default function handler(req, res) {
  if (req.method === 'POST') {
    const pet = {
      ...req.body,
      id: uuidv4()
    }

    supabaseClient
      .from(tableName)
      .insert([pet])
      .then((data) => {
        res.status(200).json(data);
      });
  } else {
    res.status(500).json({error: 'Wrong method call for this path'});
  }
}
