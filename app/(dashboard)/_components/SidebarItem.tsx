import React from "react";

interface SidebarItemProps {
  icon: any;
  label: string;
  href: string;
}

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  return <div>SidebarItem</div>;
};

export default SidebarItem;
