import mongoose from 'mongoose';

/*/ Database connection /*/
/**
 * 0 - disconnected
 * 1 - connected
 * 2 - connecting
 * 3 - disconnecting
 * 
*/


const mongooConnection = {
  isConnected: 0
}

export const connect  = async () => {

  if (mongooConnection.isConnected) {
    console.log('Estamos conectados')
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

  await mongoose.connect('....');
  mongooConnection.isConnected = 1;
  console.log('Conecado a MongoDB', '...')
}


export const disconnect = async () => {
  
  if (mongooConnection.isConnected !== 0) return;

  await mongoose.disconnect();
  console.log('Desconecado de MongoDB')
}