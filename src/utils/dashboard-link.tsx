import { ReactNode } from "react";

import { LinksAdmin, LinksTenants } from "@enums/links-menu-enum";
import {
  Code2,
  Home,
  Layers3,
  LayoutList,
  Users,
  Utensils,
} from "lucide-react";

interface LinksType {
  id: LinksTenants | LinksAdmin;
  label: string;
  link: string;
  icone: ReactNode;
}

const classIcom = "w-5 h-5";

export const DashboardLinks: LinksType[] = [
  {
    id: LinksTenants.DASHBOARD,
    label: "Dashborad",
    link: "/dashboard",
    icone: <Home className={classIcom} />,
  },
  {
    id: LinksTenants.ORDERS,
    label: "Pedidos",
    link: "/pedidos",
    icone: <LayoutList className={classIcom} />,
  },
  {
    id: LinksTenants.PRODUCTS,
    label: "Produtos",
    link: "/produtos",
    icone: <Utensils className={classIcom} />,
  },
  {
    id: LinksTenants.CATEGORIES,
    label: "Categorias",
    link: "/categorias",
    icone: <Layers3 className={classIcom} />,
  },
];

export const LinksPageAdmin: LinksType[] = [
  {
    id: LinksTenants.DASHBOARD,
    label: "Dashborad",
    link: "/dashboard",
    icone: <Home className={classIcom} />,
  },
  {
    id: LinksAdmin.TENANTS,
    label: "Estabelecimentos",
    link: "/tenants",
    icone: <Utensils className={classIcom} />,
  },
  {
    id: LinksAdmin.USERS,
    label: "Usuarios",
    link: "/users",
    icone: <Users className={classIcom} />,
  },
  {
    id: LinksAdmin.DEV,
    label: "Desenvolvedores",
    link: "/devs",
    icone: <Code2 className={classIcom} />,
  },
];
