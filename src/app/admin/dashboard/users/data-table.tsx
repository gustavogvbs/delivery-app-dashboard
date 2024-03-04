"use client";

import { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDownIcon, Plus } from "lucide-react";

import LayoutProductModal from "@components/layout-product-modal";
import TableComponent from "@components/TableComponent";
import { Button } from "@ui/button";
import * as DropdownRoot from "@ui/dropdown-menu";
import { Input } from "@ui/input";

import { TranslateColumnsTable } from "@utils/translate-columns-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [filterBy, setFilterBy] = useState<{ id: string; label: string }>({
    id: "name",
    label: "Nome",
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <div className="flex items-center py-4">
        <div className="flex gap-2">
          <Input
            placeholder={`Filtrar por ${filterBy.label}...`}
            value={
              (table.getColumn(filterBy.id)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filterBy.id)?.setFilterValue(event.target.value)
            }
            className="max-w-sm focus-visible:border-violet-500 focus-visible:ring-violet-500"
          />
          <DropdownRoot.DropdownMenu>
            <DropdownRoot.DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto data-[state=open]:ring-1 data-[state=open]:ring-ring data-[state=open]:ring-violet-500 data-[state=open]:border-violet-500"
              >
                Filtrar <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownRoot.DropdownMenuTrigger>
            <DropdownRoot.DropdownMenuContent
              className="flex flex-col gap-1"
              align="end"
            >
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  const label = TranslateColumnsTable(column.id);
                  return (
                    <span key={column.id} className="block">
                      {column.id != "actions" && (
                        <Button
                          variant="ghost"
                          className="capitalize w-full justify-start"
                          onClick={() => setFilterBy({ id: column.id, label })}
                        >
                          {label}
                        </Button>
                      )}
                    </span>
                  );
                })}
            </DropdownRoot.DropdownMenuContent>
          </DropdownRoot.DropdownMenu>
        </div>
        <div className="flex-1 flex gap-2">
          <DropdownRoot.DropdownMenu>
            <DropdownRoot.DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="ml-auto data-[state=open]:ring-1 data-[state=open]:ring-ring data-[state=open]:ring-violet-500 data-[state=open]:border-violet-500"
              >
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownRoot.DropdownMenuTrigger>
            <DropdownRoot.DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  const label = TranslateColumnsTable(column.id);

                  return (
                    <span key={column.id}>
                      {column.id != "actions" && (
                        <DropdownRoot.DropdownMenuCheckboxItem
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {label}
                        </DropdownRoot.DropdownMenuCheckboxItem>
                      )}
                    </span>
                  );
                })}
            </DropdownRoot.DropdownMenuContent>
          </DropdownRoot.DropdownMenu>
          <LayoutProductModal
            textButton={
              <Button className="flex gap-2 bg-violet-600 hover:bg-violet-800">
                Adicionar <Plus className="size-4" />
              </Button>
            }
          />
        </div>
      </div>
      <div className="rounded-md border ">
        <TableComponent data={table} columns={columns} />
      </div>
    </>
  );
}
