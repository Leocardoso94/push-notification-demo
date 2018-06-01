import firebase from 'firebase';

export const inicializarFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: '777608841115' // troque pelo seu sender id 
  });
}

export const pedirPermissaoParaReceberNotificacoes = async () => {
  try {
    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}
