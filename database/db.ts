import NeDB from 'nedb-promises';

const db = new NeDB({
  filename: 'store.nedb',
  autoload: true,
});

export default db;
