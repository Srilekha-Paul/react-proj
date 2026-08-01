import { apiSlice } from "@/store/api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendPaymentOtp: builder.mutation({
      query: (data) => ({
        url: "/orders/send-payment-otp",
        method: "POST",
        body: data,
      }),
    }),

    processCheckout: builder.mutation({
      query: (orderData) => ({
        url: "/orders/checkout",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Cart", "Orders"],
    }),

    getUserOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useSendPaymentOtpMutation,
  useProcessCheckoutMutation,
  useGetUserOrdersQuery,
} = orderApiSlice;
