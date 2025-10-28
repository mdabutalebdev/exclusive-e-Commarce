// components/TrackOrder.jsx
'use client';
import React, { useState } from 'react';
import { FaSearch, FaBox, FaShippingFast, FaCheckCircle, FaTruckLoading, FaHome } from 'react-icons/fa';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const trackOrder = () => {
    // Simulate API call
    if (orderId.trim()) {
      setTrackingInfo({
        orderId: orderId,
        status: 'shipped',
        estimatedDelivery: '2024-12-25',
        customer: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '+1 234 567 8900'
        },
        shippingAddress: {
          street: '123 Main Street',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'United States'
        },
        items: [
          { id: 1, name: 'Wireless Headphones', quantity: 1, price: 99.99 },
          { id: 2, name: 'Phone Case', quantity: 2, price: 15.99 }
        ],
        timeline: [
          { status: 'ordered', date: '2024-12-15 10:30 AM', completed: true },
          { status: 'confirmed', date: '2024-12-15 11:45 AM', completed: true },
          { status: 'processed', date: '2024-12-16 09:15 AM', completed: true },
          { status: 'shipped', date: '2024-12-18 02:20 PM', completed: true },
          { status: 'out_for_delivery', date: '2024-12-24 08:00 AM', completed: false },
          { status: 'delivered', date: '', completed: false }
        ]
      });
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ordered': return <FaBox className="text-blue-500" />;
      case 'confirmed': return <FaCheckCircle className="text-green-500" />;
      case 'processed': return <FaTruckLoading className="text-yellow-500" />;
      case 'shipped': return <FaShippingFast className="text-purple-500" />;
      case 'out_for_delivery': return <FaTruckLoading className="text-orange-500" />;
      case 'delivered': return <FaHome className="text-green-500" />;
      default: return <FaBox className="text-gray-500" />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ordered': return 'Order Placed';
      case 'confirmed': return 'Order Confirmed';
      case 'processed': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'out_for_delivery': return 'Out for Delivery';
      case 'delivered': return 'Delivered';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-600">
            Enter your order ID to track your package in real-time
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID (e.g., ORD-123456)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
            <button
              onClick={trackOrder}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300"
            >
              <FaSearch className="w-5 h-5" />
              Track Order
            </button>
          </div>
        </div>

        {/* Tracking Results */}
        {trackingInfo && (
          <div className="space-y-8">
            
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {trackingInfo.orderId}
                  </div>
                  <div className="text-gray-600">Order ID</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Shipped
                  </div>
                  <div className="text-gray-600">Current Status</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {trackingInfo.estimatedDelivery}
                  </div>
                  <div className="text-gray-600">Est. Delivery</div>
                </div>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Status</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {/* Timeline Steps */}
                <div className="space-y-8">
                  {trackingInfo.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-2 ${
                        step.completed 
                          ? 'bg-green-100 border-green-500' 
                          : 'bg-gray-100 border-gray-300'
                      }`}>
                        <div className="text-2xl">
                          {getStatusIcon(step.status)}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-2">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className={`text-lg font-semibold ${
                            step.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {getStatusText(step.status)}
                          </h3>
                          {step.date && (
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {step.date}
                            </span>
                          )}
                        </div>
                        {step.completed && (
                          <p className="text-green-600 text-sm">
                            Your order has been {step.status.replace('_', ' ')}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Customer & Shipping Info */}
              <div className="space-y-6">
                {/* Customer Information */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h3>
                  <div className="space-y-2 text-gray-600">
                    <div><strong>Name:</strong> {trackingInfo.customer.name}</div>
                    <div><strong>Email:</strong> {trackingInfo.customer.email}</div>
                    <div><strong>Phone:</strong> {trackingInfo.customer.phone}</div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h3>
                  <div className="space-y-2 text-gray-600">
                    <div>{trackingInfo.shippingAddress.street}</div>
                    <div>{trackingInfo.shippingAddress.city}, {trackingInfo.shippingAddress.state} {trackingInfo.shippingAddress.zipCode}</div>
                    <div>{trackingInfo.shippingAddress.country}</div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Items</h3>
                <div className="space-y-4">
                  {trackingInfo.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        ${item.price}
                      </div>
                    </div>
                  ))}
                  
                  {/* Total */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="text-lg font-bold text-gray-900">Total</div>
                    <div className="text-xl font-bold text-blue-600">
                      ${trackingInfo.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about your order, our customer service team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Contact Support
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  View Order Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* No Order Tracked State */}
        {!trackingInfo && (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <FaSearch className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Track Your Order
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Enter your order ID above to see the current status of your shipment, 
              estimated delivery date, and more details about your order.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;