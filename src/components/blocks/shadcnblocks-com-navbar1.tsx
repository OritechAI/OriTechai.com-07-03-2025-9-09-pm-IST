import { Book, Menu, Sunset, Trees, Zap, Home, Briefcase, Users, MessageSquare, CheckCircle, Star } from "lucide-react";
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
  sectionId?: string;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
    sectionId?: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
      sectionId?: string;
    };
    signup: {
      text: string;
      url: string;
      sectionId?: string;
    };
  };
  activeSection?: string;
  onNavClick?: (url: string, sectionId: string) => void;
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/images/oritech.png",
    alt: "OriTech Logo",
    title: "OriTech",
  },
  menu = [
    { title: "Home", url: "/", icon: <Home className="h-5 w-5" />, sectionId: "home" },
    { title: "Problem", url: "/problem", icon: <Briefcase className="h-5 w-5" />, sectionId: "problem-statement" },
    { title: "What We Do", url: "/what-we-do", icon: <Briefcase className="h-5 w-5" />, sectionId: "what-we-do" },
    { title: "Testimonials", url: "/testimonials", icon: <Star className="h-5 w-5" />, sectionId: "testimonials" }
  ],
  mobileExtraLinks = [
    { name: "Home", url: "/", sectionId: "home" },
    { name: "Problem", url: "/problem", sectionId: "problem-statement" },
    { name: "What We Do", url: "/what-we-do", sectionId: "what-we-do" },
  ],
  auth = {
    login: { text: "Why Choose Us", url: "#why-work-with-us", sectionId: "why-work-with-us" },
    signup: { text: "Book a call", url: "#consultation", sectionId: "consultation" },
  },
  activeSection,
  onNavClick,
}: Navbar1Props) => {
  const handleItemClick = (url: string, sectionId?: string) => {
    if (onNavClick && sectionId) {
      onNavClick(url, sectionId);
    } else if (sectionId) {
      // Default scrolling behavior
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-4 will-change-transform hw-accelerated">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleItemClick('/', 'home'); }} className="flex items-center gap-2">
              <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
              <span className="text-lg font-semibold text-black">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => {
                    const isActive = activeSection === item.sectionId;
                    return (
                      <NavigationMenuItem key={item.title}>
                        <a
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-black font-bold' : 'text-black hover:text-gray-600'}`}
                          href={`#${item.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(item.url, item.sectionId); 
                          }}
                        >
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.title}
                        </a>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="border-black text-black hover:bg-gray-100">
              <a 
                href={`#${auth.login.sectionId}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleItemClick(auth.login.url, auth.login.sectionId); 
                }}
              >
                {auth.login.text}
              </a>
            </Button>
            <Button asChild size="sm" className="bg-black hover:bg-gray-800 text-white">
              <a 
                href={`#${auth.signup.sectionId}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleItemClick(auth.signup.url, auth.signup.sectionId); 
                }}
              >
                {auth.signup.text}
              </a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleItemClick('/', 'home'); }}
              className="flex items-center gap-2"
            >
              <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
              <span className="text-lg font-semibold text-black">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-black text-black">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white border-black/20 z-[9999]">
                <SheetHeader>
                  <SheetTitle>
                    <a 
                      href="#home" 
                      onClick={(e) => { e.preventDefault(); handleItemClick('/', 'home'); }}
                      className="flex items-center gap-2"
                    >
                      <img src={logo.src} className="w-8 h-8 rounded-full" alt={logo.alt} />
                      <span className="text-lg font-semibold text-black">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => {
                      const isActive = activeSection === item.sectionId;
                      return (
                        <a 
                          key={item.title} 
                          href={`#${item.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(item.url, item.sectionId); 
                          }}
                          className={`flex items-center font-semibold ${isActive ? 'text-black font-bold' : 'text-black hover:text-gray-600'}`}
                        >
                          {item.icon && <span className="mr-3">{item.icon}</span>}
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                  <div className="border-t border-black/20 py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-black transition-colors hover:text-gray-600"
                          href={`#${link.sectionId}`}
                          onClick={(e) => { 
                            e.preventDefault(); 
                            handleItemClick(link.url, link.sectionId); 
                          }}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="border-black text-black hover:bg-gray-100">
                      <a 
                        href={`#${auth.login.sectionId}`}
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleItemClick(auth.login.url, auth.login.sectionId); 
                        }}
                      >
                        {auth.login.text}
                      </a>
                    </Button>
                    <Button asChild className="bg-black hover:bg-gray-800 text-white">
                      <a 
                        href={`#${auth.signup.sectionId}`}
                        onClick={(e) => { 
                          e.preventDefault(); 
                          handleItemClick(auth.signup.url, auth.signup.sectionId); 
                        }}
                      >
                        {auth.signup.text}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Navbar1 };