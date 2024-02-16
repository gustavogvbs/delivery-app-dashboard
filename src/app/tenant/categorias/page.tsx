"use client";

import { ReactNode } from "react";

import { LinksTenants } from "@enums/links-menu-enum";

import { LayoutDashboardTenant } from "@components/layout-dashboard-tenant";

import { columns } from "./columns";
import { DataTable } from "./data-table";

const ProductsPage = (): ReactNode => {
  const data = [
    {
      id: "728ed52f",
      slug: "lanche-teste",
      name: "pending",
    },
    {
      id: "728ed52f",
      slug: "lanche-teste",
      name: "ending",
    },
    {
      id: "728ed52f",
      slug: "lanche-teste",
      name: "anding",
    },
  ];

  return (
    <LayoutDashboardTenant page={LinksTenants.CATEGORIES}>
      <DataTable columns={columns} data={data} />
    </LayoutDashboardTenant>
  );
};

export default ProductsPage;
