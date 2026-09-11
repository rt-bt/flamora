"use client";

import Link from "next/link";
import { Award, Sparkles, Gift, Flame, ChevronRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileSmilesClubCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/60 via-flamora-charcoal to-black p-4.5 text-white shadow-xl">
      {/* Decorative Gold Rings */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

      {/* Top Row: Brand + Tier */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-600 text-black shadow-md font-black">
            👑
          </div>
          <div>
            <h3 className="font-heading text-sm font-extrabold tracking-wide text-white">
              SMILES LOYALTY CLUB
            </h3>
            <p className="text-[10px] text-amber-300/80">Barbeque Rewards &amp; Cashback</p>
          </div>
        </div>

        <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/40">
          Gold Status
        </span>
      </div>

      {/* Center Balance / Perks */}
      <div className="mt-3.5 grid grid-cols-2 gap-2 rounded-2xl bg-white/5 p-3 border border-white/10">
        <div>
          <span className="text-[10px] uppercase font-bold text-white/50 block">Your Smile Coins</span>
          <span className="text-xl font-black text-amber-400">250 Coins</span>
          <span className="text-[9px] text-white/60 block mt-0.5">= ₹250 Discount on Bill</span>
        </div>
        <div className="border-l border-white/10 pl-3">
          <span className="text-[10px] uppercase font-bold text-white/50 block">Next Dining Perk</span>
          <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
            🎂 Free Birthday Cake
          </span>
          <span className="text-[9px] text-amber-300/80 block mt-0.5">5% Cashback on Every Visit</span>
        </div>
      </div>

      {/* 3 Micro Perks Bar */}
      <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[10px] text-white/70">
        <div className="rounded-lg bg-white/5 py-1.5 px-1 border border-white/5">
          <span className="block font-bold text-white">5% Coins</span>
          <span className="text-[9px] text-white/50">On Every Bill</span>
        </div>
        <div className="rounded-lg bg-white/5 py-1.5 px-1 border border-white/5">
          <span className="block font-bold text-white">Priority Seating</span>
          <span className="text-[9px] text-white/50">Skip the Queue</span>
        </div>
        <div className="rounded-lg bg-white/5 py-1.5 px-1 border border-white/5">
          <span className="block font-bold text-white">Free Cake</span>
          <span className="text-[9px] text-white/50">Birthday Special</span>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-3.5 flex items-center justify-between pt-2 border-t border-white/10">
        <span className="text-xs font-semibold text-white/80">Join 500k+ Happy Diners</span>
        <Link
          href="/offers"
          className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
        >
          <span>Claim Perks</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
