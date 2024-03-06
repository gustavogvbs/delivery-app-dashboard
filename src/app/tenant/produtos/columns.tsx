"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";

import { ActionsButtonTable } from "@components/actions-button-table";
import LayoutProductModal from "@components/modals/layout-product-modal";
import { Checkbox } from "@ui/checkbox";

export type Payment = {
  id: string;
  slug: string;
  amount: number;
  name: string;
  category: string;
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
    accessorKey: "slug",
    header: "Id",
    cell: ({ row }) => <div className="lowercase">{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
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
