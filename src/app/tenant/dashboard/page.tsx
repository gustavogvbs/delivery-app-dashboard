"use client";

import { ReactNode } from "react";

import { LinksTenants } from "@enums/links-menu-enum";

import { LayoutDashboardTenant } from "@components/layout-dashboard-tenant";

const DashboardPage = (): ReactNode => {
  return (
    <LayoutDashboardTenant page={LinksTenants.DASHBOARD}>
      Ola
    </LayoutDashboardTenant>
  );
};

export default DashboardPage;
