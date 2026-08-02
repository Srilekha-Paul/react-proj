import { useGetUserOrdersQuery } from "@/feature/order/orderApiSlice";
import { Package, Truck, CheckCircle2, Clock, Calendar, MapPin, CreditCard, ChevronRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const Orders = () => {
  const { data: response, isLoading, isError } = useGetUserOrdersQuery();
  const orders = response?.data || [];
  const [searchParams] = useSearchParams();
  const highlightedTrackingId = searchParams.get("trackingId");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your order history...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0] px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-xl">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to load orders</h2>
          <p className="text-gray-600 mb-6">Please log in or try refreshing the page.</p>
          <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl transition">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f5f0] py-10 sm:py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 mb-2 sm:mb-4">
            My Order History
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Track and manage your luxury jewelry orders
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <Package className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No Orders Placed Yet</h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base">
              Explore our fine collection of luxury jewelry and place your first order.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-2xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Shop <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {orders.map((order) => {
              const isHighlighted = highlightedTrackingId && order.id === highlightedTrackingId;
              const formattedDate = order.createdAt
                ? new Date(order.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recent";

              return (
                <div
                  key={order.id}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden border transition-all ${
                    isHighlighted ? "border-yellow-500 ring-2 ring-yellow-400" : "border-gray-100"
                  }`}
                >
                  {/* Order Header */}
                  <div className="bg-gray-900 text-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <span className="text-[10px] sm:text-xs text-yellow-400 font-semibold tracking-wider uppercase block mb-0.5">
                        Order Number
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif">{order.orderNumber}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="capitalize">{order.paymentMethod}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{order.orderStatus || "Confirmed"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                    {/* Items List */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Items Purchased
                      </h4>
                      <div className="divide-y divide-gray-100">
                        {order.items?.map((item) => (
                          <div key={item.id} className="py-3 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-700 font-bold text-xs sm:text-sm flex-shrink-0">
                                {item.quantity}x
                              </div>
                              <span className="font-semibold text-xs sm:text-base text-gray-900 truncate">{item.productName}</span>
                            </div>
                            <span className="font-bold text-xs sm:text-base text-gray-900 flex-shrink-0">${item.totalPrice.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Details Footer */}
                    <div className="pt-4 sm:pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="truncate">{order.shippingAddress}</span>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-xs text-gray-500 block">Total Amount</span>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">${order.totalAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;

