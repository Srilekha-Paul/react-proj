import { createContext, useContext, useReducer, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
} from "@/feature/cart/cartApiSlice";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload;

    case "ADD_TO_CART": {
      const existingItem = state.find(
        (item) => item.id === action.payload.id || item.productId === action.payload.id
      );
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id || item.productId === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id || item.productId === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.id !== action.payload && item.productId !== action.payload
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth || {});

  const [cart, dispatch] = useReducer(cartReducer, []);

  // RTK Query hooks
  const { data: cartData, isSuccess } = useGetCartQuery(undefined, {
    skip: !isAuthenticated,
  });

  const [addToCartApi] = useAddToCartMutation();
  const [updateCartItemApi] = useUpdateCartItemMutation();
  const [removeCartItemApi] = useRemoveCartItemMutation();
  const [clearCartApi] = useClearCartMutation();

  // Sync backend cart to local reducer whenever backend data updates
  useEffect(() => {
    if (isAuthenticated && isSuccess && cartData?.data?.items) {
      dispatch({
        type: "SET_CART",
        payload: cartData.data.items,
      });
    }
  }, [isAuthenticated, isSuccess, cartData]);

  // Add to Cart (Optimistic update + RTK Query mutation)
  const addToCart = async (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    if (isAuthenticated) {
      try {
        await addToCartApi({
          productId: product.id || product.productId,
          quantity: 1,
        }).unwrap();
      } catch (err) {
        console.error("RTK Query addToCart error:", err);
      }
    }
  };

  // Update Quantity
  const updateQuantity = async (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });

    if (isAuthenticated) {
      try {
        await updateCartItemApi({ itemId: id, quantity }).unwrap();
      } catch (err) {
        console.error("RTK Query updateCartItem error:", err);
      }
    }
  };

  // Remove from Cart
  const removeFromCart = async (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });

    if (isAuthenticated) {
      try {
        await removeCartItemApi(id).unwrap();
      } catch (err) {
        console.error("RTK Query removeCartItem error:", err);
      }
    }
  };

  // Clear Cart
  const clearCart = async () => {
    dispatch({
      type: "CLEAR_CART",
    });

    if (isAuthenticated) {
      try {
        await clearCartApi().unwrap();
      } catch (err) {
        console.error("RTK Query clearCart error:", err);
      }
    }
  };

  const totalItems = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
