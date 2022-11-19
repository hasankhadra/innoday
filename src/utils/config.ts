const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
}

// eslint-disable-next-line prefer-destructuring
export const BASE_API = process.env.BASE_API

const NEXT_BASE_API = '/api'

const APIS = {
    STATS: `${NEXT_BASE_API}/getByDay`,
    HISTORY: `${NEXT_BASE_API}/history`,
    ADD_ACTIVITIES: `${NEXT_BASE_API}/add-activities`,
}

const NEXT_APIS = {
    STATS: `${BASE_API}/getByDay`,
    HISTORY: `${BASE_API}/createActivity`,
    ADD_ACTIVITIES: `${BASE_API}/createActivity`,
}

export { firebaseConfig, APIS, NEXT_APIS }
