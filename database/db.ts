import mongoose from 'mongoose';

/*/ Database connection /*/
/**
 * 0 - disconnected
 * 1 - connected
 * 2 - connecting
 * 3 - disconnecting
 * 
*/

// TODO: Cambiar paqueteria a mongodb
const mongooConnection = {
  isConnected: 0
}

export const connect  = async () => {

  if (mongooConnection.isConnected) {
    console.log('Ya estabamos conectados')
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConnected = mongoose.connections[0].readyState;

    if (mongooConnection.isConnected === 1) {
      console.log('Usando conexion anterior')
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConnection.isConnected = 1;
  console.log('Conecado a MongoDB', process.env.MONGO_URL)
}


export const disconnect = async () => {

  if (process.env.NODE_ENV === 'development') return;
  
  if (mongooConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongooConnection.isConnected = 0;
  console.log('Desconecado de MongoDB')
}