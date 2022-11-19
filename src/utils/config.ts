// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID,
// }

const firebaseConfig = {
    apiKey: 'AIzaSyAc2Z8DBuSWL_ifUmRFH5ukChjUlWeW3e8',
    authDomain: 'innoday-6b9ff.firebaseapp.com',
    projectId: 'innoday-6b9ff',
    storageBucket: 'innoday-6b9ff.appspot.com',
    messagingSenderId: '334247834232',
    appId: '1:334247834232:web:866b43440fb8a2b3b7f38d',
    measurementId: 'G-CJ9E9PK1Z2',
}

// const { BASE_API } = process.env

const BASE_API =
    'https://innoday-developer-edition.eu44.force.com/services/apexrest'

const APIS = {
    STATS: `${BASE_API}/getByDay`,
    HISTORY: `${BASE_API}/history`,
    ADD_ACTIVITIES: `${BASE_API}/add-activities`,
}

export { firebaseConfig, APIS }
