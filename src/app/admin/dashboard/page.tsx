import { ReactNode } from "react";

import { LinksAdmin } from "@enums/links-menu-enum";

import { LayoutPageAdmin } from "@components/admin/layout-page";

const DashboardPage = (): ReactNode => {
  return <LayoutPageAdmin page={LinksAdmin.DASHBOARD}>Ola</LayoutPageAdmin>;
};

export default DashboardPage;
