"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";

import { ActionsButtonTable } from "@components/actions-button-table";
import LayoutProductModal from "@components/modals/layout-product-modal";
import { Checkbox } from "@ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  slug: string;
  name: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => <div className="lowercase">{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <ActionsButtonTable
          paymentId={payment.id}
          deleteButton={"Excluir"}
          editButton={
            <LayoutProductModal
              asChild={false}
              textButton={
                <>
                  Editar <Edit className="size-4" />
                </>
              }
            />
          }
        />
      );
    },
  },
];
