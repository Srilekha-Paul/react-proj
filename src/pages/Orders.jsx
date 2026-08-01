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
    <section className="min-h-screen bg-[#f8f5f0] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            My Order History
          </h1>
          <p className="text-gray-600 text-lg">
            Track and manage your luxury jewelry orders
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-2xl mx-auto">
            <Package className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">No Orders Placed Yet</h2>
            <p className="text-gray-600 mb-8">
              Explore our fine collection of luxury jewelry and place your first order.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Explore Shop <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
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
                  <div className="bg-gray-900 text-white p-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-yellow-400 font-semibold tracking-wider uppercase block mb-1">
                        Order Number
                      </span>
                      <h3 className="text-2xl font-bold font-serif">{order.orderNumber}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-yellow-400" />
                        <span className="capitalize">{order.paymentMethod}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{order.orderStatus || "Confirmed"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Items List */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Items Purchased
                      </h4>
                      <div className="divide-y divide-gray-100">
                        {order.items?.map((item) => (
                          <div key={item.id} className="py-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 font-bold text-sm">
                                {item.quantity}x
                              </div>
                              <span className="font-semibold text-gray-900">{item.productName}</span>
                            </div>
                            <span className="font-bold text-gray-900">${item.totalPrice.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Details Footer */}
                    <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-yellow-500" />
                        <span>{order.shippingAddress}</span>
                      </div>

                      <div className="text-right">
                        <span className="text-sm text-gray-500 block">Total Amount</span>
                        <span className="text-3xl font-bold text-gray-900">${order.totalAmount.toFixed(2)}</span>
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
