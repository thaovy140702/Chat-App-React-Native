import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDZAWBrQ9wVKQqJK6KVniq9va1LA2F3f6U",
        authDomain: "mychatapp-3119f.firebaseapp.com",
        projectId: "mychatapp-3119f",
        storageBucket: "mychatapp-3119f.appspot.com",
        messagingSenderId: "142811991069",
        appId: "1:142811991069:web:8071e565f15868b6ed8af4",
        measurementId: "G-ZNN3YDVJ29"
      };
      
    
      return initializeApp(firebaseConfig);
}