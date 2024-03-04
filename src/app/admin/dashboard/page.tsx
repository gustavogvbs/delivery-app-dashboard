"use server";

import { cookies } from "next/headers";

import { LinksAdmin } from "@enums/links-menu-enum";

import { getCookie } from "cookies-next";

import { LayoutPageAdmin } from "@components/admin/layout-page";

import { api } from "@lib/api";

const DashboardPage = async () => {
  const useApi = api.admin();
  const token = getCookie("token", { cookies });
  cookies();
  const user = await useApi.GET(token as string).catch((e) => {
    console.error(e);
  });

  if (!user || !user.data) {
    return <div>Error</div>;
  }

  return (
    <LayoutPageAdmin page={LinksAdmin.DASHBOARD}>
      {JSON.stringify(user?.data)}
    </LayoutPageAdmin>
  );
};

export default DashboardPage;
