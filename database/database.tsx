import Dexie from 'dexie';

// Interface para tipagem do usuário
export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
}

// Criar o banco e definir o schema UMA ÚNICA VEZ no nível do módulo
const db = new Dexie('OmegaProductivityDataBase');

db.version(1).stores({
    User: '++id, name, email, password'
});

// Exportar o db já configurado
export { db };

// Função helper para acessar o banco
export async function getDB() {
    if (!db.isOpen()) {
        await db.open();
    }
    return db;
}
