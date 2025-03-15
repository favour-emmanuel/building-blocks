"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface MenuItem {
  name?: string;
  path?: string;
  meta: {
    title: string;
    icon?: string | React.ComponentType<{ className?: string }>;
    component?: React.ComponentType;
  };
  children?: MenuItem[];
}

interface SidebarNavProps {
  menus?: MenuItem[];
  showIcon?: boolean;
  subNav?: boolean;
  vertical?: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({
  menus = [],
  showIcon = true,
  subNav = false,
  vertical = false,
}) => {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSubmenu = (menuName: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const isActive = (menu: MenuItem) => {
    return pathname === menu.path;
  };

  return (
    <nav className={vertical ? "flex flex-col space-y-2" : "flex space-x-2"}>
      {menus.map((menu) => (
        <div key={menu.name || menu.path}>
          {menu.children ? (
            <Collapsible
              open={expandedMenus[menu.name || ""]}
              onOpenChange={() => toggleSubmenu(menu.name || "")}
            >
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  <div className="flex items-center">
                    {showIcon &&
                      menu.meta.icon &&
                      (typeof menu.meta.icon === "string" ? (
                        <span className="mr-3">{menu.meta.icon}</span>
                      ) : (
                        <menu.meta.icon className="mr-3 h-4 w-4" />
                      ))}
                    {subNav && <span className="dot" />}
                    <span>{menu.meta.title}</span>
                  </div>
                  {expandedMenus[menu.name || ""] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarNav
                  menus={menu.children}
                  showIcon={false}
                  subNav
                  vertical
                />
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Link href={menu.path || "#"}>
              <Button
                variant={isActive(menu) ? "default" : "ghost"}
                className="w-full justify-start"
              >
                {showIcon &&
                  menu.meta.icon &&
                  typeof menu.meta.icon !== "string" && (
                    <menu.meta.icon className="mr-3 h-4 w-4" />
                  )}
                {subNav && <span className="dot" />}
                <span>{menu.meta.title}</span>
              </Button>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;
