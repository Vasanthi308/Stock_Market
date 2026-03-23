"use client";

import React from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { History, Play, Calendar, DollarSign, Activity, FileText } from "lucide-react";

export default function BacktestingPage() {
  return (
    <DashboardLayout>
      <div className="w-full max-w-6xl mx-auto pb-10">
        
        <div className="mb-8 border-b border-white/5 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
               <History className="w-8 h-8 text-[#00D4AA]" /> Strategy Backtesting
            </h1>
            <p className="text-gray-400 font-medium mt-2">Simulate custom technical environments over historical price action</p>
          </div>
          <button className="bg-[#00D4AA] text-[#060B14] font-black px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#00D4AA]/90 shadow-[0_0_15px_rgba(0,212,170,0.3)] transition shrink-0">
            <Play className="w-4 h-4" /> Run Simulation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="md:col-span-1 space-y-6">
              <div className="bg-[#0F1928] border border-white/5 rounded-2xl p-6 shadow-xl">
                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Simulation Parameters</h3>
                 
                 <div className="space-y-5">
                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Asset Category</label>
                       <select className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none">
                          <option>NIFTY 50 Futures</option>
                          <option>Bank Nifty Options</option>
                          <option>Equity Cash</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5"><DollarSign className="w-3 h-3" /> Initial Capital</label>
                       <input type="text" defaultValue="₹ 10,00,000" className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none" />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Lookback Period</label>
                       <input type="text" defaultValue="Jan 2020 - Dec 2023" className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none" />
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5"><Activity className="w-3 h-3" /> Core Logic</label>
                       <select className="w-full bg-[#060B14] border border-white/10 rounded-xl px-4 py-2 text-[#00D4AA] text-sm focus:outline-none">
                          <option>EMA Crossover (9, 21)</option>
                          <option>RSI Mean Reversion</option>
                          <option>Supertrend Trail</option>
                       </select>
                    </div>
                 </div>
              </div>
           </div>

           <div className="md:col-span-2">
              <div className="bg-[#0F1928]/50 border border-white/5 rounded-2xl p-6 min-h-[500px] flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 rounded-full bg-[#080E19] flex items-center justify-center border border-white/5 mb-4">
                    <FileText className="w-8 h-8 text-gray-500" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">No Simulation Results</h3>
                 <p className="text-sm font-medium text-gray-400 max-w-sm">Configure your strategy parameters on the left and hit "Run Simulation" to generate backtest tear sheets and equity curves.</p>
              </div>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
