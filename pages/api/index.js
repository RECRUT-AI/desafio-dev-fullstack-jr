import supabase from '../../utils/supabase'
const { SUPABASE_KEY, supabaseUrl, tableName} = supabase;
const app = require('express')();
const { createClient } = require('@supabase/supabase-js');


const supabaseClient = createClient(supabaseUrl, SUPABASE_KEY);

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// path
const path = '/api';

/********************************
 * HTTP Get method for list objects *
 ********************************/
 app.get(path, async (req, res) => {
  await supabaseClient
    .from(tableName)
    .select('*')
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = app;
