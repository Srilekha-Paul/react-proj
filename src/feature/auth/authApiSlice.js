import { apiSlice } from "@/store/api/apiSlice";
import { setCredentials } from "../../store/slice/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // REGISTER
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const responseData = data?.data;

          dispatch(
            setCredentials({
              access_token: responseData.access_token,
              refresh_token: responseData.refresh_token,
              id: responseData.id,
              name: responseData.name,
              role: responseData.role,
              email_verified: responseData.email_verified,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // LOGIN
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const responseData = data?.data;

          dispatch(
            setCredentials({
              access_token: responseData.access_token,
              refresh_token: responseData.refresh_token,
              id: responseData.id,
              name: responseData.name,
              email: responseData.email,
              role: responseData.role,
              email_verified: responseData.email_verified,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // VERIFY OTP
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Auth"],
    }),

    // RESEND OTP
    resendOtp: builder.mutation({
      query: () => ({
        url: "/otp/send-otp",
        method: "POST",
      }),
    }),

    // FORGOT PASSWORD OTP
    sendForgotOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    // RESET PASSWORD SUBMIT
    resetPasswordSubmit: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useSendForgotOtpMutation,
  useResetPasswordSubmitMutation,
} = authApiSlice;
