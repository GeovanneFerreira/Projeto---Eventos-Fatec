import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Exemplo para autenticação
import { getDatabase } from 'firebase/database'; // Exemplo para o Realtime Database

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
 
// Inicializa e exporta serviços
export const auth = getAuth(app);
export const database = getDatabase(app);
 
// Se precisar do app em outro lugar, pode exportá-lo também
export default app;
