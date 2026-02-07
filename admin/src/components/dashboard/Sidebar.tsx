// import React from 'react'

import { cn } from "@/lib/utils"
import useAuthStore from "@/store/useAuthStore";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
// import {
//   LayoutDashboard,
//   Users,
//   ShoppingBag,
//   Tag,
//   Bookmark,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   Layers,
//   Package,
//   User,
//   FileText,
// } from "lucide-react";

interface Props {
  open: boolean,
  setOpen: (open: boolean) => void,
}

const Sidebar = ({ open, setOpen }: Props) => {
  const { user, logout } = useAuthStore();



  return (
    <motion.aside className={cn("fixed inset-y-0 left-0 z-20 flex flex-col border-r border-r-slate-800/50 bg-linear-to-b from-slate-500 via-slate-800 to-900 shadow-2xl hoverEffect text-white", open ? "w-64" : "w-20")}
      initial={{ width: open ? 256 : 80 }}
      animate={{ width: open ? 256 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between p-4 h-16 bg-linear-to-r from-[#29beb3] via-slate-700 to-[#a96bde] border-b border-slate-600/50">
        <motion.div
          initial={{ opacity: open ? 1 : 0, width: open ? "auto" : 0 }}
          animate={{ opacity: open ? 1 : 0, width: open ? "auto" : 0 }}
          transition={{ duration: 0.2 }}
          className={cn("flex items-center overflow-hidden", open ? "w-auto opacity-100" : "opacity-0")}
        >
          <h2 className="font-bold text-xl text-white drop-shadow-lg">BabyMart Admin</h2>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
          <Button
            onClick={() => setOpen(!open)}
            variant={"ghost"} size={"icon"} className="rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border-white/70 hover:border-white/50 hoverEffect">
            <motion.div
              animate={{ rotate: open ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <ChevronLeft /> : <ChevronRight className="rotate-180" />}
            </motion.div>
          </Button>
        </motion.div>
      </div>
      {/* Sidebar Content */}
      <div className="flex flex-col gap-1 flex-1 bg-linear-to-b from-slate-900 to-slate-800/50">
      </div>

      <div className="flex flex-col gap-1 bg-linear-to-b from-slate-900 to-slate-800/50 overflow-hidden">
        <motion.div className={cn("flex items-center gap-3 px-3 mb-3", open ? "justify-start" : "justify-center")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div>
            {user?.avatar ? <img src={user?.avatar} alt="img" className="h-full w-full object-cover" /> : user?.name?.charAt(0).toUpperCase()}
          </div>
          <AnimatePresence>
            {open && <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
            </motion.div>}
          </AnimatePresence>
          {/* <div>
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
          </div> */}
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant={"outline"} size={open ? "default" : "icon"}
            onClick={logout}
            className="w-full border-red-500/30 hover:bg-red-6--/20 hover:border-red-400/50 text-red-400 transition-colors bg-red-600/10 backdrop-blur-sm"
          >
            <LogOut size={16} className={cn("mr-2", !open && "mr-0")} />
            {open && "Logout"}
          </Button>
        </motion.div>
      </div>


    </motion.aside>
  )
}

export default Sidebar

