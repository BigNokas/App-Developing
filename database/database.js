import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
    user: '++id, email, password'
})

export default db;
