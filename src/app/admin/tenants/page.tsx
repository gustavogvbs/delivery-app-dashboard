"use client";

import { ReactNode } from "react";

import { LinksAdmin } from "@enums/links-menu-enum";

import { LayoutPageAdmin } from "@components/admin/layout-page";

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
    <LayoutPageAdmin page={LinksAdmin.TENANTS}>
      <DataTable columns={columns} data={data} />
    </LayoutPageAdmin>
  );
};

export default ProductsPage;
