"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import { LinksAdmin } from "@enums/links-menu-enum";
import {
  LayoutDashboard,
  Settings,
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

import SkeletonTable from "@components/skeleton-table";
import * as AvatarRoot from "@ui/avatar";
import * as ButtonRoot from "@ui/button";
import * as DropdownRoot from "@ui/dropdown-menu";
import { Input } from "@ui/input";

import { LinksPageAdmin } from "@utils/dashboard-link";

interface Props {
  children: ReactNode;
  page: LinksAdmin;
}

export const LayoutPageAdmin = ({ children, page }: Props): ReactNode => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex bg-zinc-50 max-h-[100vh] overflow-hidden">
      {/* Side Menu */}
      <aside className="min-h-[100vh] min-w-[280px] bg-zinc-800">
        <div className="w-full h-full px-2 py-12  ">
          <div className="h-full flex flex-col justify-between ">
            <div className="flex flex-col gap-10">
              <div className="pl-4">
                <h1 className="text-2xl font-bold text-violet-600 flex gap-4 items-center">
                  Delivery App
                  <LayoutDashboard className="w-7 h-7" />
                </h1>
              </div>
              <nav className="w-full">
                <ul className="flex flex-col gap-1">
                  {LinksPageAdmin.map((item, index) => {
                    return (
                      <li
                        className="w-full"
                        key={`dashboard-menu-links-${index}`}
                      >
                        <ButtonRoot.Button
                          asChild
                          data-actived={item.id === page}
                          className="w-full justify-start  hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 data-[actived=true]:text-zinc-100 data-[actived=true]:bg-zinc-700"
                          variant={"ghost"}
                        >
                          <Link
                            href={`/admin/${item.link}`}
                            className="font-semibold text-base flex gap-4 items-center"
                          >
                            {item.icone}
                            {item.label}
                          </Link>
                        </ButtonRoot.Button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div>
              <ButtonRoot.Button
                data-actived={false}
                className="w-full justify-start  hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 data-[actived=true]:text-zinc-100 data-[actived=true]:bg-zinc-700"
                variant={"ghost"}
              >
                <p className="font-semibold text-base flex gap-4 items-center">
                  <Settings className="w-5 h-5" />
                  Configurações
                </p>
              </ButtonRoot.Button>
            </div>
          </div>
        </div>
      </aside>

      <div className="w-full flex flex-col">
        {/* Header */}
        <header className="w-full border-b-2 px-8 shadow-sm border-zinc-200 min-h-14 flex items-center">
          <div className="grid grid-cols-12 gap-2 flex-1">
            <div className="col-span-8 flex items-center gap-6">
              <div className="hidden">
                <Menu className="w-6 h-6 text-zinc-400" />
              </div>
              <div className="hidden h-full border-l-[1px] w-0 border-zinc-200" />
              <div className="relative w-full">
                <div className="flex h-full absolute items-center">
                  <Search className="w-5 h-5 text-zinc-400" />
                </div>
                <Input
                  placeholder="Search..."
                  className="h-6 text-md border-none shadow-none pl-8 focus-visible:ring-0 text-zinc-600 placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="flex items-center col-span-4 justify-end gap-6 h-full">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-zinc-400" />
              </div>
              <div className="h-full border-l-[1px] w-0 border-zinc-200" />
              <DropdownRoot.DropdownMenu>
                <DropdownRoot.DropdownMenuTrigger className="flex items-center gap-2">
                  <AvatarRoot.Avatar className="h-7 w-7 text-xs text-zinc-100 font-bold">
                    <AvatarRoot.AvatarFallback className="bg-orange-500">
                      GV
                    </AvatarRoot.AvatarFallback>
                  </AvatarRoot.Avatar>
                  <p className="text-sm flex items-center gap-1 text-zinc-800">
                    Gustavo Vilas Boas
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  </p>
                </DropdownRoot.DropdownMenuTrigger>
                <DropdownRoot.DropdownMenuContent align="end">
                  <DropdownRoot.DropdownMenuItem className="justify-between text-zinc-600">
                    Seu perfil
                    <User className="w-4 h-4" />
                  </DropdownRoot.DropdownMenuItem>
                  <DropdownRoot.DropdownMenuItem className="justify-between text-zinc-600">
                    Sair
                    <LogOut className="w-4 h-4" />
                  </DropdownRoot.DropdownMenuItem>
                </DropdownRoot.DropdownMenuContent>
              </DropdownRoot.DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 h-full max-w-full overflow-y-scroll">
          <section className="border-2 rounded-lg p-8 h-full">
            {isClient ? children : <SkeletonTable />}
          </section>
        </main>
      </div>
    </div>
  );
};
