import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaTTPpqz0jwfIfeNZCv6ZXgqvrJk7K5PY",
  authDomain: "dia-s-nail-studio.firebaseapp.com",
  projectId: "dia-s-nail-studio",
  storageBucket: "dia-s-nail-studio.appspot.com",
  messagingSenderId: "51820267559",
  appId: "1:51820267559:web:your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export type BookingType = 'appointment' | 'class';

export type BookingRequest = {
  id?: string;
  bookingType: BookingType;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  email?: string;
  experienceLevel?: string;
  createdAt?: Timestamp;
};

// Function to add booking request to Firestore
export const addBookingRequest = async (bookingData: Omit<BookingRequest, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'booking_requests'), {
      ...bookingData,
      createdAt: Timestamp.now()
    });
    console.log('Booking request saved to Firebase with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding booking request to Firebase: ', error);
    throw error;
  }
};