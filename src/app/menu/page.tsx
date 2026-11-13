"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Flame,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  X,
  MessageCircle,
  Crown,
  Users,
  User,
  Sparkles,
  MapPin,
  Navigation,
  CreditCard,
  Banknote,
  Bike,
  Car,
  Loader2,
  Trash2,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import {
  menuCategories,
  menuItems,
  comboDeals,
  MenuItem,
} from "@/data/menuData";
import {
  getWhatsAppOrderUrl,
} from "@/config/siteConfig";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [vegFilter, setVegFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [comboTypeFilter, setComboTypeFilter] = useState<"all" | "single" | "family">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<{ [itemId: string]: string }>({
    "crispy-chicken": "crispy-chicken-1pc",
  });

  // Interactive Checkout Drawer State
  const [orderType, setOrderType] = useState<"delivery" | "takeaway">("delivery");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [manualDistance, setManualDistance] = useState<"within" | "beyond">("within");
  const [gpsCoords, setGpsCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [gpsDistance, setGpsDistance] = useState<number | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "online">("cod");

  // Flamora Outlet Coordinates: 26.647844, 84.922933
  const calculateDistanceKm = (lat: number, lon: number) => {
    const OUTLET_LAT = 26.647844;
    const OUTLET_LNG = 84.922933;
    const R = 6371; // km
    const dLat = ((lat - OUTLET_LAT) * Math.PI) / 180;
    const dLon = ((lon - OUTLET_LNG) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((OUTLET_LAT * Math.PI) / 180) *
        Math.cos((lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Number((R * c).toFixed(1));
  };

  // Live GPS locator handler
  const handleGetLiveLocation = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }
    setLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude.toFixed(6));
        const lng = Number(position.coords.longitude.toFixed(6));
        setGpsCoords({ lat, lng });
        const dist = calculateDistanceKm(lat, lng);
        setGpsDistance(dist);
        if (dist > 4.0) {
          setManualDistance("beyond");
        } else {
          setManualDistance("within");
        }
        setLocating(false);
      },
      () => {
        setLocating(false);
        setLocationError("Location permission denied. Please enter address manually.");
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  };

  // Helper to get active variant for an item
  const getActiveVariant = (item: MenuItem) => {
    if (!item.variants || item.variants.length === 0) return null;
    const currentVariantId = selectedVariants[item.id] || item.variants[0].id;
    return item.variants.find((v) => v.id === currentVariantId) || item.variants[0];
  };

  // Cart operations
  const addToCart = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const clearCart = () => setCart({});

  // Quick Order button handler (opens drawer with item ready for address/COD checkout)
  const handleQuickOrder = (id: string) => {
    if (!cart[id]) {
      addToCart(id);
    }
    setCartOpen(true);
  };

  // Cart totals calculation (supports standalone items, variant items, and combos)
  const cartItemsDetailed = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        // Direct item match
        const item = menuItems.find((m) => m.id === id);
        if (item) return { ...item, quantity: qty };

        // Match in item variants (e.g. crispy-chicken-1pc, crispy-chicken-2pc)
        for (const parentItem of menuItems) {
          if (parentItem.variants) {
            const variant = parentItem.variants.find((v) => v.id === id);
            if (variant) {
              return {
                id: variant.id,
                name: `${parentItem.name} (${variant.name})`,
                category: parentItem.category,
                price: variant.price,
                originalPrice: variant.originalPrice,
                isVeg: parentItem.isVeg,
                spiceLevel: parentItem.spiceLevel,
                description: variant.portion,
                portion: variant.portion,
                image: parentItem.image,
                quantity: qty,
              };
            }
          }
        }

        // Match in combo deals
        const combo = comboDeals.find((c) => c.id === id);
        if (combo) {
          return {
            id: combo.id,
            name: combo.title,
            category: "Combos" as const,
            price: combo.price,
            originalPrice: combo.originalPrice,
            isVeg: combo.isVeg,
            spiceLevel: 2 as const,
            description: combo.tagline,
            portion: combo.serves,
            image: combo.image,
            quantity: qty,
          };
        }
        return null;
      })
      .filter(Boolean) as (MenuItem & { quantity: number })[];
  }, [cart]);

  const cartTotalCount = useMemo(() => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }, [cart]);

  const cartTotalPrice = useMemo(() => {
    return cartItemsDetailed.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItemsDetailed]);

  // Delivery charge calculation based on user rules:
  // 1. If distance > 4 km OR order < ₹150 => Delivery charge = ₹50
  // 2. If distance <= 4 km AND order >= ₹150 => FREE Delivery (₹0)
  // 3. Takeaway / Pickup => ₹0
  const isOrderUnder150 = cartTotalPrice < 150;
  const isBeyond4km = manualDistance === "beyond" || (gpsDistance !== null && gpsDistance > 4.0);

  let deliveryFee = 0;
  let deliveryExplanation = "";

  if (orderType === "takeaway") {
    deliveryFee = 0;
    deliveryExplanation = "Self Pickup (No delivery fee)";
  } else {
    if (isBeyond4km) {
      deliveryFee = 50;
      deliveryExplanation = gpsDistance
        ? `Distance ~${gpsDistance} km (> 4 km fee applied)`
        : "Beyond 4 km standard delivery charge";
    } else if (isOrderUnder150) {
      deliveryFee = 50;
      deliveryExplanation = `Order below ₹150 minimum (Add ₹${150 - cartTotalPrice} for FREE delivery)`;
    } else {
      deliveryFee = 0;
      deliveryExplanation = "FREE Delivery (Order is ₹150+ & within 4 km)";
    }
  }

  const grandTotal = cartTotalPrice + deliveryFee;

  // Generate WhatsApp order message with Full Receipt, Address, Live GPS Link, Delivery Fee & Payment Mode
  const generateCartWhatsAppUrl = () => {
    if (cartItemsDetailed.length === 0) return getWhatsAppOrderUrl();

    const itemsList = cartItemsDetailed
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join("\n");

    const mapsLink = gpsCoords
      ? `https://maps.google.com/?q=${gpsCoords.lat},${gpsCoords.lng}`
      : null;

    let msg = `🔥 *NEW FLAMORA ORDER* 🔥\n`;
    msg += `---------------------------------\n`;
    msg += `🍽️ *Order Type:* ${orderType === "delivery" ? "🛵 Home Delivery" : "🥡 Takeaway / Pickup"}\n`;

    if (customerName.trim()) {
      msg += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      msg += `📞 *Customer Phone:* ${customerPhone.trim()}\n`;
    }

    if (orderType === "delivery") {
      msg += `📍 *Delivery Address:* ${deliveryAddress.trim() || "Address on call / Shared via WhatsApp"}\n`;
      if (mapsLink) {
        msg += `🗺️ *Live GPS Location:* ${mapsLink} ${gpsDistance ? `(~${gpsDistance} km from outlet)` : ""}\n`;
      }
      msg += `🚚 *Delivery Zone:* ${isBeyond4km ? "Beyond 4 km (>4 km)" : "Within 4 km (Local Motihari)"}\n`;
    }

    msg += `💳 *Payment Method:* ${paymentMethod === "cod" ? "💵 Cash on Delivery (COD)" : "📱 Online UPI / QR (Pay on Delivery)"}\n`;
    msg += `---------------------------------\n`;
    msg += `📋 *ORDER ITEMS:*\n${itemsList}\n`;
    msg += `---------------------------------\n`;
    msg += `💰 *Items Subtotal:* ₹${cartTotalPrice}\n`;
    if (orderType === "delivery") {
      msg += `🚚 *Delivery Fee:* ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`} (${deliveryExplanation})\n`;
    }
    msg += `🔥 *GRAND TOTAL:* ₹${grandTotal}\n`;
    msg += `---------------------------------\n`;
    msg += `Please confirm order preparation and dispatch time!`;

    return getWhatsAppOrderUrl(msg);
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Veg / Non-Veg filter
      if (vegFilter === "veg" && !item.isVeg) return false;
      if (vegFilter === "non-veg" && item.isVeg) return false;
      // Search filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) =>
          t.toLowerCase().includes(query)
        );
        const matchesVariants = item.variants?.some((v) =>
          v.name.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesTags && !matchesVariants) return false;
      }
      return true;
    });
  }, [selectedCategory, vegFilter, searchQuery]);

  // Filtered combos
  const filteredCombos = useMemo(() => {
    if (comboTypeFilter === "all") return comboDeals;
    return comboDeals.filter((c) => c.comboType === comboTypeFilter);
  }, [comboTypeFilter]);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EBD6] pb-24">
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#141414] to-[#0F0F0F] border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero-flame-grill.jpg')` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
            REAL CHICKEN · BOLD FLAVOURS · GREAT TIMES
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Menu &amp; Combos
          </h1>
          <p className="text-xs sm:text-base text-[#F4EBD6]/80 max-w-2xl mx-auto leading-relaxed">
            Live charcoal flame grills, golden crispy fried specials, signature combos, sides &amp; ice-cold drinks. Order directly on WhatsApp with address, live location &amp; COD options.
          </p>

          {/* Quick Stats Pill */}
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-[#FFC107]">
            <span className="flex items-center gap-1.5">
              <Flame size={14} className="text-[#FF6A24]" /> 100% Halal Meats
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#FF6A24]" /> Live Charcoal Smoked
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Free Delivery Over ₹150 (Within 4 km)</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTROLS: CATEGORY TABS, VEG FILTER & SEARCH
      ========================================================================= */}
      <section className="sticky top-[69px] z-30 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Category Tabs (Horizontal Scrollable) */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {menuCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`whitespace-nowrap px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-heading text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#FF6A24] text-white shadow-flame-sm scale-102"
                        : "bg-[#181818] text-[#F4EBD6]/80 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Search & Veg/Non-Veg Filter */}
            <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto">
              {/* Veg / Non-Veg Toggle */}
              <div className="inline-flex rounded-full bg-[#181818] p-1 border border-white/10 flex-shrink-0 text-xs">
                <button
                  onClick={() => setVegFilter("all")}
                  className={`px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    vegFilter === "all" ? "bg-white/20 text-white" : "text-gray-400"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setVegFilter("veg")}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    vegFilter === "veg" ? "bg-green-600/30 text-green-400" : "text-gray-400"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Veg</span>
                </button>
                <button
                  onClick={() => setVegFilter("non-veg")}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors cursor-pointer ${
                    vegFilter === "non-veg" ? "bg-red-600/30 text-red-400" : "text-gray-400"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Non-Veg</span>
                </button>
              </div>

              {/* Search Input */}
              <div className="relative flex-1 sm:w-64">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search grilled chicken, tikka..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-full pl-9 pr-7 py-1.5 sm:py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MENU ITEMS GRID / LIST
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <p className="text-xs sm:text-sm text-[#F4EBD6]/70">
            Showing <span className="text-[#FF6A24] font-bold">{filteredItems.length}</span> delicious dishes
          </p>

          {cartTotalCount > 0 && (
            <button
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center gap-2 bg-[#FF6A24] text-white px-3.5 py-1.5 rounded-full text-xs font-heading font-semibold shadow-flame-sm hover:bg-[#E55815] transition-all cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>Platter Box ({cartTotalCount})</span>
              <span className="ml-1 bg-black/30 px-2 py-0.5 rounded-full text-[11px]">
                ₹{cartTotalPrice}
              </span>
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#141414] rounded-2xl border border-white/5">
            <Flame size={48} className="text-[#FF6A24] mx-auto opacity-50 mb-4" />
            <h3 className="font-heading font-bold text-lg text-white">No items found</h3>
            <p className="text-xs text-[#F4EBD6]/60 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any dish matching your filter. Try changing category or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setVegFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-[#FF6A24] text-white text-xs font-semibold rounded-full shadow-flame-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div>
            {/* Mobile Card Layout (Polished, Fast, Native-App Quality) */}
            <div className="sm:hidden space-y-3">
              {filteredItems.map((item) => {
                const activeVariant = getActiveVariant(item);
                const currentPrice = activeVariant ? activeVariant.price : item.price;
                const currentOriginalPrice = activeVariant ? activeVariant.originalPrice : item.originalPrice;
                const currentPortion = activeVariant ? activeVariant.portion : item.portion;
                const currentCartId = activeVariant ? activeVariant.id : item.id;
                const currentItemName = activeVariant ? `${item.name} (${activeVariant.name})` : item.name;
                const inCartQty = cart[currentCartId] || 0;

                return (
                  <div
                    key={`mob-${item.id}`}
                    className="bg-[#141414] rounded-2xl p-3 border border-white/5 flex flex-col gap-2.5 shadow-card-dark"
                  >
                    <div className="flex items-start gap-3">
                      {/* Dish Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-black">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Details */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`w-3 h-3 border flex items-center justify-center rounded-[2px] ${
                              item.isVeg ? "border-green-500" : "border-red-500"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.isVeg ? "bg-green-500" : "bg-red-500"
                              }`}
                            />
                          </div>
                          <h3 className="font-heading font-bold text-sm text-white truncate">
                            {item.name}
                          </h3>
                        </div>

                        <p className="text-[11px] text-[#FFC107] font-medium mt-0.5">
                          {currentPortion}
                        </p>

                        <p className="text-[11px] text-[#F4EBD6]/70 line-clamp-2 mt-1 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Piece Selector (for Crispy Chicken 1, 2, 4, 6 Pc) */}
                    {item.variants && item.variants.length > 0 && (
                      <div className="bg-black/50 p-2 rounded-xl border border-white/5 space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-heading">
                          <span className="text-[#FFC107] font-semibold">Select Quantity:</span>
                          <span className="text-[#FF6A24] font-bold">
                            {activeVariant?.name} = ₹{activeVariant?.price}
                          </span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {item.variants.map((v) => {
                            const isSelected = activeVariant?.id === v.id;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedVariants((prev) => ({
                                    ...prev,
                                    [item.id]: v.id,
                                  }));
                                }}
                                className={`py-1 px-1 rounded-lg text-center font-heading transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[#FF6A24] text-white font-bold shadow-sm"
                                    : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
                                }`}
                              >
                                <div className="text-[11px] leading-tight">{v.name}</div>
                                <div className={`text-[9px] mt-0.5 ${isSelected ? "text-white" : "text-[#FF6A24]"}`}>
                                  ₹{v.price}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Mobile Bottom Row: Price & Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-heading font-black text-base text-[#FF6A24]">
                          ₹{currentPrice}
                        </span>
                        {currentOriginalPrice && (
                          <span className="text-[11px] text-gray-500 line-through">
                            ₹{currentOriginalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Quick Order (Opens Platter Drawer for address, location & COD options) */}
                        <button
                          onClick={() => handleQuickOrder(currentCartId)}
                          className="flex items-center gap-1 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white px-2.5 py-1 rounded-full text-[11px] font-heading font-semibold transition-colors cursor-pointer"
                          title="Order with Address & Location"
                        >
                          <MessageCircle size={13} />
                          <span>Order</span>
                        </button>

                        {/* Platter Box Counter */}
                        {inCartQty > 0 ? (
                          <div className="inline-flex items-center bg-[#FF6A24] rounded-full text-white text-xs px-1.5 py-0.5">
                            <button
                              onClick={() => removeFromCart(currentCartId)}
                              className="p-1 hover:bg-black/20 rounded-full cursor-pointer"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-1.5 font-bold">{inCartQty}</span>
                            <button
                              onClick={() => addToCart(currentCartId)}
                              className="p-1 hover:bg-black/20 rounded-full cursor-pointer"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(currentCartId)}
                            className="w-7 h-7 rounded-full border border-[#FF6A24] text-[#FF6A24] flex items-center justify-center hover:bg-[#FF6A24] hover:text-white transition-colors cursor-pointer"
                            aria-label={`Add ${currentItemName}`}
                          >
                            <Plus size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop / Tablet Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => {
                const activeVariant = getActiveVariant(item);
                const currentPrice = activeVariant ? activeVariant.price : item.price;
                const currentOriginalPrice = activeVariant ? activeVariant.originalPrice : item.originalPrice;
                const currentPortion = activeVariant ? activeVariant.portion : item.portion;
                const currentCartId = activeVariant ? activeVariant.id : item.id;
                const currentItemName = activeVariant ? `${item.name} (${activeVariant.name})` : item.name;
                const inCartQty = cart[currentCartId] || 0;

                return (
                  <div
                    key={item.id}
                    className="group bg-[#141414] rounded-[20px] overflow-hidden border border-white/5 hover:border-[#FF6A24]/40 shadow-card-dark transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Item Image with Badges */}
                      <div className="relative h-48 w-full bg-black overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-70" />

                        {/* Veg / Non-Veg Indicator Badge */}
                        <div className="absolute top-3 left-3 bg-[#141414]/90 backdrop-blur-sm p-1 rounded-md border border-white/10 flex items-center justify-center">
                          <div
                            className={`w-3.5 h-3.5 border-2 flex items-center justify-center rounded-[2px] ${
                              item.isVeg ? "border-green-500" : "border-red-500"
                            }`}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.isVeg ? "bg-green-500" : "bg-red-500"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Bestseller Badge */}
                        {item.isBestseller && (
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FF6A24] to-[#D62B28] text-white text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                            BESTSELLER
                          </div>
                        )}

                        {/* Spice Level Indicator */}
                        <div className="absolute bottom-2 left-3 bg-black/75 px-2 py-0.5 rounded-full text-[10px] font-semibold text-[#FFC107]">
                          {"🔥".repeat(item.spiceLevel)} {item.spiceLevel === 1 ? "Mild" : item.spiceLevel === 2 ? "Medium" : "Extra Hot"}
                        </div>
                      </div>

                      {/* Item Details */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#FF6A24] transition-colors leading-snug">
                            {item.name}
                          </h3>
                        </div>

                        <p className="text-[11px] text-[#FFC107] font-medium mt-0.5">
                          {currentPortion}
                        </p>

                        <p className="text-xs text-[#F4EBD6]/75 mt-2 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Interactive Pieces Selector (Desktop) */}
                        {item.variants && item.variants.length > 0 && (
                          <div className="mt-3 bg-black/50 p-2.5 rounded-xl border border-white/5">
                            <div className="flex items-center justify-between text-[11px] mb-1.5 font-heading">
                              <span className="text-[#FFC107] font-semibold">Choose Quantity:</span>
                              <span className="text-xs font-bold text-[#FF6A24]">
                                {activeVariant?.name} = ₹{activeVariant?.price}
                              </span>
                            </div>
                            <div className="grid grid-cols-4 gap-1.5">
                              {item.variants.map((v) => {
                                const isSelected = activeVariant?.id === v.id;
                                return (
                                  <button
                                    key={v.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedVariants((prev) => ({
                                        ...prev,
                                        [item.id]: v.id,
                                      }));
                                    }}
                                    className={`py-1.5 px-1 rounded-lg text-center font-heading transition-all cursor-pointer ${
                                      isSelected
                                        ? "bg-gradient-to-r from-[#FF6A24] to-[#E55815] text-white shadow-flame-sm scale-[1.02] border border-[#FF6A24]"
                                        : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5"
                                    }`}
                                  >
                                    <div className="text-xs font-black">{v.name}</div>
                                    <div
                                      className={`text-[10px] mt-0.5 ${
                                        isSelected ? "text-white font-bold" : "text-[#FF6A24] font-semibold"
                                      }`}
                                    >
                                      ₹{v.price}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] bg-white/5 border border-white/5 text-[#F4EBD6]/70 px-2 py-0.5 rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Bottom: Price, WhatsApp Button & Add to Platter */}
                    <div className="p-5 pt-0">
                      <div className="flex items-center justify-between mb-3 border-t border-white/5 pt-3">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-heading font-extrabold text-xl text-[#FF6A24]">
                            ₹{currentPrice}
                          </span>
                          {currentOriginalPrice && (
                            <span className="text-xs text-gray-500 line-through">
                              ₹{currentOriginalPrice}
                            </span>
                          )}
                        </div>

                        {/* Quick Add / Platter Count */}
                        <div className="flex items-center gap-1.5">
                          {inCartQty > 0 ? (
                            <div className="inline-flex items-center bg-[#FF6A24] rounded-full text-white text-xs px-1.5 py-0.5 shadow-flame-sm">
                              <button
                                onClick={() => removeFromCart(currentCartId)}
                                className="p-1 hover:bg-black/20 rounded-full cursor-pointer"
                                aria-label="Reduce count"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="px-1.5 font-bold">{inCartQty}</span>
                              <button
                                onClick={() => addToCart(currentCartId)}
                                className="p-1 hover:bg-black/20 rounded-full cursor-pointer"
                                aria-label="Increase count"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(currentCartId)}
                              className="w-8 h-8 rounded-full bg-[#FF6A24]/15 hover:bg-[#FF6A24] text-[#FF6A24] hover:text-white border border-[#FF6A24]/40 flex items-center justify-center transition-all duration-200 cursor-pointer"
                              title="Add to Platter Box"
                              aria-label={`Add ${currentItemName} to platter`}
                            >
                              <Plus size={16} />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Direct Single Item WhatsApp Order Button -> Opens Drawer with Address & Location */}
                      <button
                        onClick={() => handleQuickOrder(currentCartId)}
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 py-2 px-3 rounded-xl text-xs font-heading font-semibold transition-all duration-300 cursor-pointer"
                      >
                        <MessageCircle size={14} />
                        <span>Order on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION: COMBOS & VALUE FEASTS (MATCHES OFFICIAL MENU CARD)
      ========================================================================= */}
      <section id="combos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14">
        <div className="bg-gradient-to-r from-[#181818] via-[#141414] to-[#181818] border border-white/10 rounded-[24px] p-5 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/10">
            <div>
              <span className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase mb-1">
                <Crown size={15} /> MORE CHICKEN · MORE VALUE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
                Flamora Combos &amp; Feasts
              </h2>
            </div>

            {/* Filter Toggle: All / Single / Family */}
            <div className="inline-flex rounded-full bg-[#0F0F0F] p-1 border border-white/10 text-xs">
              <button
                onClick={() => setComboTypeFilter("all")}
                className={`px-3 py-1.5 rounded-full font-heading font-semibold transition-colors cursor-pointer ${
                  comboTypeFilter === "all" ? "bg-[#FF6A24] text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                All Combos ({comboDeals.length})
              </button>
              <button
                onClick={() => setComboTypeFilter("single")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-heading font-semibold transition-colors cursor-pointer ${
                  comboTypeFilter === "single" ? "bg-[#FF6A24] text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <User size={13} />
                <span>Single Combos (4)</span>
              </button>
              <button
                onClick={() => setComboTypeFilter("family")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-heading font-semibold transition-colors cursor-pointer ${
                  comboTypeFilter === "family" ? "bg-[#FF6A24] text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Users size={13} />
                <span>Family Combos (4)</span>
              </button>
            </div>
          </div>

          {/* Combos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCombos.map((combo) => {
              const inCartQty = cart[combo.id] || 0;
              return (
                <div
                  key={combo.id}
                  className="bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#FF6A24]/40 transition-colors shadow-card-dark"
                >
                  <div>
                    {/* Combo Food Image Banner */}
                    <div className="relative h-48 w-full bg-black overflow-hidden">
                      <Image
                        src={combo.image}
                        alt={combo.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-[#FF6A24] text-white text-[10px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                          {combo.badge}
                        </span>
                        <span className="bg-black/80 backdrop-blur-sm text-[#FFC107] text-[10px] font-heading font-semibold px-2 py-0.5 rounded-full border border-white/10">
                          {combo.comboType === "single" ? "Solo Diner" : "Grand Sharing"}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="text-xs text-green-400 font-semibold bg-green-950/80 border border-green-500/30 px-2.5 py-0.5 rounded-full">
                          {combo.savings}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 text-xs text-white/90 font-medium">
                        👥 Serves: <span className="text-[#FFC107] font-semibold">{combo.serves}</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-xl text-white">
                        {combo.title}
                      </h3>
                      <p className="text-xs text-[#F4EBD6]/70 mt-1 mb-4 leading-relaxed">
                        {combo.tagline}
                      </p>

                      {/* Items Checklist */}
                      <ul className="space-y-1.5 mb-2 text-xs text-[#F4EBD6]/90 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                        {combo.items.map((i, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check size={14} className="text-[#FF6A24] flex-shrink-0" />
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: Price + Order + Platter */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-2xl font-heading font-black text-[#FF6A24]">
                          ₹{combo.price}
                        </span>
                        <span className="text-xs text-gray-500 line-through ml-2">
                          ₹{combo.originalPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Platter Add Button */}
                        {inCartQty > 0 ? (
                          <div className="inline-flex items-center bg-[#FF6A24] rounded-full text-white text-xs px-2 py-1 shadow-flame-sm">
                            <button
                              onClick={() => removeFromCart(combo.id)}
                              className="p-0.5 hover:bg-black/20 rounded-full cursor-pointer"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-1.5 font-bold">{inCartQty}</span>
                            <button
                              onClick={() => addToCart(combo.id)}
                              className="p-0.5 hover:bg-black/20 rounded-full cursor-pointer"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(combo.id)}
                            className="w-8 h-8 rounded-full border border-[#FF6A24]/40 text-[#FF6A24] hover:bg-[#FF6A24] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                            title="Add combo to Platter Box"
                            aria-label={`Add ${combo.title} to platter`}
                          >
                            <Plus size={15} />
                          </button>
                        )}

                        {/* Direct Order WhatsApp -> Opens Drawer with Checkout Details */}
                        <button
                          onClick={() => handleQuickOrder(combo.id)}
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-full font-heading font-semibold text-xs transition-colors shadow-sm cursor-pointer"
                        >
                          <MessageCircle size={14} />
                          <span>Order Combo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PLATTER TRAY / MULTI-ITEM ORDER & COMPLETE CHECKOUT DRAWER
      ========================================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-[#141414] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl">
            {/* 1. Header (Fixed Top) */}
            <div className="p-5 pb-3 border-b border-white/10 flex items-center justify-between flex-shrink-0 bg-[#161616]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF6A24]/15 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24]">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Flamora Platter Box
                  </h3>
                  <p className="text-[11px] text-[#FFC107]">
                    {cartTotalCount} {cartTotalCount === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* 2. Scrollable Middle Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs text-[#F4EBD6]">
              {cartItemsDetailed.length === 0 ? (
                <div className="py-20 text-center text-gray-400 space-y-2">
                  <ShoppingBag size={42} className="mx-auto text-gray-600 mb-2" />
                  <p className="text-sm font-semibold text-white">Your platter is empty</p>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto">
                    Click the &ldquo;+&rdquo; or &ldquo;Order&rdquo; button on any dish or combo to build your feast.
                  </p>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between pb-1 border-b border-white/5">
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#FF6A24]">
                        Selected Dishes &amp; Combos
                      </span>
                      <button
                        onClick={clearCart}
                        className="text-[11px] text-gray-400 hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 size={12} />
                        <span>Clear All</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {cartItemsDetailed.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2.5 bg-white/[0.03] rounded-xl border border-white/5"
                        >
                          <div className="min-w-0 flex-1 mr-2">
                            <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                            <p className="text-[11px] text-[#FF6A24] font-bold">
                              ₹{item.price} <span className="text-[10px] text-gray-400 font-normal">x {item.quantity} = ₹{item.price * item.quantity}</span>
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs cursor-pointer transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="text-xs font-bold text-white w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item.id)}
                              className="w-6 h-6 rounded-md bg-[#FF6A24] hover:bg-[#E55815] text-white flex items-center justify-center text-xs cursor-pointer transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Type Toggle: Home Delivery vs Takeaway */}
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/10 space-y-2">
                    <span className="font-heading font-bold text-xs text-white block">
                      Order Fulfillment Method:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType("delivery")}
                        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                          orderType === "delivery"
                            ? "bg-[#FF6A24] text-white shadow-flame-sm"
                            : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                        }`}
                      >
                        <Bike size={14} />
                        <span>Home Delivery</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType("takeaway")}
                        className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                          orderType === "takeaway"
                            ? "bg-[#FF6A24] text-white shadow-flame-sm"
                            : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                        }`}
                      >
                        <Car size={14} />
                        <span>Takeaway / Pickup</span>
                      </button>
                    </div>
                  </div>

                  {/* Customer Information (Name & Phone) */}
                  <div className="space-y-2">
                    <span className="font-heading font-bold text-xs text-[#FFC107] block uppercase tracking-wider">
                      Customer Details
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name (e.g. Rahul)"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                      />
                      <input
                        type="tel"
                        placeholder="Phone (e.g. 9876543210)"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                      />
                    </div>
                  </div>

                  {/* Delivery Location & Address Section (Only for Home Delivery) */}
                  {orderType === "delivery" && (
                    <div className="bg-[#181818] p-3.5 rounded-xl border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-xs text-white flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#FF6A24]" />
                          <span>Delivery Address &amp; Location</span>
                        </span>
                        <span className="text-[10px] text-gray-400">Motihari Area</span>
                      </div>

                      {/* Address Textarea */}
                      <textarea
                        rows={2}
                        placeholder="House / Flat No., Street, Landmark (e.g. Near Gandhi Chowk, Motihari)"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full bg-[#121212] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24] resize-none"
                      />

                      {/* GPS Live Location Button */}
                      <div>
                        <button
                          type="button"
                          onClick={handleGetLiveLocation}
                          disabled={locating}
                          className="w-full flex items-center justify-center gap-2 bg-[#FF6A24]/15 hover:bg-[#FF6A24]/25 text-[#FF6A24] border border-[#FF6A24]/40 py-2 px-3 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer disabled:opacity-50"
                        >
                          {locating ? (
                            <>
                              <Loader2 size={13} className="animate-spin" />
                              <span>Detecting GPS Location...</span>
                            </>
                          ) : (
                            <>
                              <Navigation size={13} />
                              <span>{gpsCoords ? "Update Live GPS Location" : "Share Live Location Through Map"}</span>
                            </>
                          )}
                        </button>

                        {/* Location Success Badge */}
                        {gpsCoords && (
                          <div className="mt-2 p-2 rounded-lg bg-green-950/60 border border-green-500/40 text-[11px] text-green-300 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Check size={13} className="text-green-400 flex-shrink-0" />
                              <span>
                                GPS Location pinned {gpsDistance ? `(~${gpsDistance} km from Flamora)` : ""}
                              </span>
                            </span>
                            <a
                              href={`https://maps.google.com/?q=${gpsCoords.lat},${gpsCoords.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] underline text-green-200 hover:text-white flex items-center gap-0.5"
                            >
                              <span>View Pin</span>
                              <ExternalLink size={10} />
                            </a>
                          </div>
                        )}

                        {locationError && (
                          <p className="mt-1.5 text-[10px] text-amber-400 flex items-center gap-1">
                            <AlertCircle size={11} />
                            <span>{locationError}</span>
                          </p>
                        )}
                      </div>

                      {/* Distance Selector (Within 4 km vs Beyond 4 km) */}
                      <div className="pt-2 border-t border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-gray-300 font-medium">Delivery Distance from Outlet:</span>
                          <span className="text-[10px] text-gray-500">Marine Drive, Motihari</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setManualDistance("within")}
                            className={`py-1.5 px-2 rounded-lg text-center font-heading text-[11px] transition-all cursor-pointer ${
                              manualDistance === "within"
                                ? "bg-[#FF6A24] text-white font-bold shadow-sm"
                                : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                            }`}
                          >
                            <div>Within 4 km</div>
                            <div className={`text-[9px] ${manualDistance === "within" ? "text-white/80" : "text-green-400"}`}>
                              {isOrderUnder150 ? "+₹50 (< ₹150)" : "FREE Delivery"}
                            </div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setManualDistance("beyond")}
                            className={`py-1.5 px-2 rounded-lg text-center font-heading text-[11px] transition-all cursor-pointer ${
                              manualDistance === "beyond"
                                ? "bg-[#FF6A24] text-white font-bold shadow-sm"
                                : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                            }`}
                          >
                            <div>Beyond 4 km</div>
                            <div className={`text-[9px] ${manualDistance === "beyond" ? "text-white/80" : "text-amber-400"}`}>
                              +₹50 Delivery Charge
                            </div>
                          </button>
                        </div>

                        {/* Informational Tip on Delivery Rules */}
                        <div className="text-[10px] text-gray-400 pt-1 leading-relaxed">
                          {isBeyond4km ? (
                            <span className="text-amber-300">
                              ℹ️ Delivery location is beyond 4 km: standard delivery charge of ₹50 applied.
                            </span>
                          ) : isOrderUnder150 ? (
                            <span className="text-amber-300">
                              💡 Order is ₹{cartTotalPrice}. Add ₹{150 - cartTotalPrice} more to get <strong>FREE delivery</strong> (within 4 km)!
                            </span>
                          ) : (
                            <span className="text-green-400">
                              🎉 Congratulations! You qualify for <strong>FREE Delivery</strong> (Order is ₹150+ &amp; within 4 km).
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment Method Selector (COD vs Online) */}
                  <div className="bg-[#1A1A1A] p-3 rounded-xl border border-white/10 space-y-2">
                    <span className="font-heading font-bold text-xs text-white block">
                      Choose Payment Method:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("cod")}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                          paymentMethod === "cod"
                            ? "bg-[#FF6A24] text-white shadow-flame-sm"
                            : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                        }`}
                      >
                        <Banknote size={14} />
                        <span>Cash on Delivery (COD)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("online")}
                        className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                          paymentMethod === "online"
                            ? "bg-[#FF6A24] text-white shadow-flame-sm"
                            : "bg-white/5 hover:bg-white/10 text-gray-400 border border-white/5"
                        }`}
                      >
                        <CreditCard size={14} />
                        <span>Online UPI / QR</span>
                      </button>
                    </div>
                  </div>

                  {/* Detailed Bill Summary Box */}
                  <div className="p-3.5 bg-black/60 rounded-xl border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span>Items Subtotal:</span>
                      <span className="font-semibold text-white">₹{cartTotalPrice}</span>
                    </div>

                    {orderType === "delivery" && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">Delivery Fee:</span>
                        <span className={`font-semibold ${deliveryFee === 0 ? "text-green-400" : "text-[#FF6A24]"}`}>
                          {deliveryFee === 0 ? "FREE" : `+₹${deliveryFee}`}
                        </span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-sm">
                      <span className="font-heading font-bold text-white">Grand Total:</span>
                      <span className="font-heading font-black text-xl text-[#FF6A24]">
                        ₹{grandTotal}
                      </span>
                    </div>

                    <div className="text-[10px] text-gray-400 pt-0.5 flex items-center justify-between">
                      <span>Payment: {paymentMethod === "cod" ? "Cash on Delivery" : "Online UPI"}</span>
                      <span>Mode: {orderType === "delivery" ? "Home Delivery" : "Takeaway"}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* 3. Sticky Bottom CTA */}
            {cartItemsDetailed.length > 0 && (
              <div className="p-4 border-t border-white/10 bg-[#161616] space-y-2 flex-shrink-0">
                <a
                  href={generateCartWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-sm shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all active:scale-[0.99]"
                >
                  <MessageCircle size={18} />
                  <span>Send Platter Order on WhatsApp • ₹{grandTotal}</span>
                </a>

                <p className="text-[10px] text-center text-gray-400">
                  Pre-fills all items, address, live GPS location &amp; payment mode into WhatsApp for instant confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}