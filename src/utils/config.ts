const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
}

const BASE_API = 'https://api.example.com'

const APIS = {
    STATS: `${BASE_API}/stats`,
    HISTORY: `${BASE_API}/history`,
    ADD_ACTIVITIES: `${BASE_API}/add-activities`,
}

// eslint-disable-next-line import/prefer-default-export
export { firebaseConfig, APIS }
