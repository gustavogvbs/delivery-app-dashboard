"use client";

import { LinksTenants } from "@enums/links-menu-enum";

import { LayoutDashboardTenant } from "@components/layout-dashboard-tenant";

import { columns } from "./columns";
import { DataTable } from "./data-table";

const ProductsPage = () => {
  const data = [
    {
      id: "728ed52f",
      slug: "lanche-teste",
      amount: 100,
      name: "pending",
      category: "Lanche",
    },
    {
      id: "728ed52f",
      slug: "lanche-teste",
      amount: 100,
      name: "ending",
      category: "Lanche",
    },
    {
      id: "728ed52f",
      slug: "lanche-teste",
      amount: 100,
      name: "anding",
      category: "Lanche",
    },
  ];

  return (
    <LayoutDashboardTenant page={LinksTenants.PRODUCTS}>
      <DataTable columns={columns} data={data} />
    </LayoutDashboardTenant>
  );
};

export default ProductsPage;
