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
} from "lucide-react";
import {
  menuCategories,
  menuItems,
  comboDeals,
  MenuItem,
} from "@/data/menuData";
import {
  getWhatsAppItemUrl,
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

  // Generate WhatsApp custom order link for multi-item platter
  const generateCartWhatsAppUrl = () => {
    if (cartItemsDetailed.length === 0) return getWhatsAppOrderUrl();
    const itemsList = cartItemsDetailed
      .map((item) => `• ${item.name} x${item.quantity} (₹${item.price * item.quantity})`)
      .join("\n");
    const message = `Hi Flamora! I would like to place an order from your menu:\n\n${itemsList}\n\n*Total Amount: ₹${cartTotalPrice}*\nPlease confirm order and delivery time.`;
    return getWhatsAppOrderUrl(message);
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
            Live charcoal flame grills, golden crispy fried specials, signature combos, sides &amp; ice-cold drinks. Order directly on WhatsApp for express live kitchen preparation.
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
            <span>Made Fresh to Order</span>
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
                  className={`px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors ${
                    vegFilter === "all" ? "bg-white/20 text-white" : "text-gray-400"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setVegFilter("veg")}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors ${
                    vegFilter === "veg" ? "bg-green-600/30 text-green-400" : "text-gray-400"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Veg</span>
                </button>
                <button
                  onClick={() => setVegFilter("non-veg")}
                  className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full font-semibold transition-colors ${
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

                    {/* Interactive Piece Selector (if item has variants like Crispy Chicken 1, 2, 4, 6 Pc) */}
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
                        {/* Direct WhatsApp Order */}
                        <a
                          href={getWhatsAppItemUrl(currentItemName, currentPrice)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white px-2.5 py-1 rounded-full text-[11px] font-heading font-semibold transition-colors"
                          title="Order on WhatsApp"
                        >
                          <MessageCircle size={13} />
                          <span>Order</span>
                        </a>

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

                      {/* Direct Single Item WhatsApp Order Button */}
                      <a
                        href={getWhatsAppItemUrl(currentItemName, currentPrice)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 py-2 px-3 rounded-xl text-xs font-heading font-semibold transition-all duration-300"
                      >
                        <MessageCircle size={14} />
                        <span>Order on WhatsApp</span>
                      </a>
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

                        {/* Direct Order WhatsApp */}
                        <a
                          href={getWhatsAppItemUrl(combo.title, combo.price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-full font-heading font-semibold text-xs transition-colors shadow-sm"
                        >
                          <MessageCircle size={14} />
                          <span>Order Combo</span>
                        </a>
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
          PLATTER TRAY / MULTI-ITEM ORDER SLIDE-OVER DRAWER
      ========================================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-[#141414] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-[#FF6A24]" />
                  <h3 className="font-heading font-bold text-lg text-white">
                    Your Flamora Platter Box
                  </h3>
                </div>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-gray-400 hover:text-white p-1 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {cartItemsDetailed.length === 0 ? (
                <div className="py-16 text-center text-gray-400">
                  <p className="text-sm">Your platter is empty.</p>
                  <p className="text-xs mt-1 text-gray-500">
                    Click the &ldquo;+&rdquo; button on any menu item or combo to build your feast.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                  {cartItemsDetailed.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5"
                    >
                      <div className="min-w-0 flex-1 mr-2">
                        <p className="text-sm font-semibold text-white truncate">{item.name}</p>
                        <p className="text-xs text-[#FF6A24]">₹{item.price} each</p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="w-6 h-6 rounded-full bg-[#FF6A24] text-white flex items-center justify-center text-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2 text-right">
                    <button
                      onClick={clearCart}
                      className="text-[11px] text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      Clear platter
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom: Cart Total & WhatsApp Checkout CTA */}
            {cartItemsDetailed.length > 0 && (
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#F4EBD6]/80">Estimated Total:</span>
                  <span className="font-heading font-extrabold text-2xl text-[#FF6A24]">
                    ₹{cartTotalPrice}
                  </span>
                </div>

                <a
                  href={generateCartWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-sm shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all"
                >
                  <MessageCircle size={18} />
                  <span>Send Platter Order on WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-gray-400">
                  Pre-fills all {cartTotalCount} items directly into WhatsApp for instant confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}