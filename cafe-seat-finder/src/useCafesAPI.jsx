import { useEffect, useState } from "react";
import { firestore } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function useCafesAPI() {
  const [loading, setLoading] = useState(true);
  const [cafeList, setCafeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCities = async (firestore) => {
      try {
        const cafes = await collection(firestore, "cafes");
        const cafesDocs = await getDocs(cafes);
        setCafeList(cafesDocs.docs.map((doc) => doc.data()));
        setLoading(false);
      } catch {
        setError("Failed to fetch cafes");
      }
    };
    
    getCities(firestore);
  }, []);

  return { cafeList, loading, error };
}
