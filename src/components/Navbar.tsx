'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home Menu Item */}
        <MenuItem  setActive={setActive} active={active} item="Home">
        <HoveredLink href="/Home"> </HoveredLink>
        </MenuItem>

        



        {/* Pages Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Pages">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/aboutus">About us </HoveredLink>
       
            <HoveredLink href="/Signin">Sign in</HoveredLink>
            <HoveredLink href="/Signup">Sign up</HoveredLink>
            <HoveredLink href="/Privacy&PolicyPages">Privacy & Policy Page</HoveredLink>
          </div>
        </MenuItem>
        

        {/* Blogs Menu Item */}
        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/personalblogs">Personal Blogs </HoveredLink>
          <HoveredLink href="/gobalblogs">Gobal Blogs </HoveredLink>
          </div>
        </MenuItem>
     

      
        <MenuItem setActive={setActive} active={active} item="News" >
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/indianews">India News </HoveredLink>
            <HoveredLink href="/worldnews">World News</HoveredLink>
            <HoveredLink href="/Stocknews">Stock News</HoveredLink>
            <HoveredLink href="/technews">Tech News</HoveredLink>
            <HoveredLink href="/lifestylenews">LifeStyle News</HoveredLink>
            <HoveredLink href="/Othernews">Other</HoveredLink>
            
            </div>
        </MenuItem>
      </Menu>
    
    </div>
  );
}

export default Navbar;
