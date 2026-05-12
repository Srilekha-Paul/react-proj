import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "products")
    );

    const products = [];

    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};