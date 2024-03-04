"use server";

import { cookies } from "next/headers";

import { LinksAdmin } from "@enums/links-menu-enum";

import { getCookie } from "cookies-next";

import { LayoutPageAdmin } from "@components/admin/layout-page";

import { api } from "@lib/api";

import { columns } from "./columns";
import { DataTable } from "./data-table";

const ProductsPage = async () => {
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

  const useApi = api.admin();
  const token = getCookie("token", { cookies });
  const user = await useApi.GET(token as string).catch((e) => {
    console.error(e);
  });

  if (!user || !user.data) {
    return <div>Error</div>;
  }

  return (
    <LayoutPageAdmin page={LinksAdmin.TENANTS}>
      <DataTable columns={columns} data={data} />
    </LayoutPageAdmin>
  );
};

export default ProductsPage;
