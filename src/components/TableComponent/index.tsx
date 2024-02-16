import { ReactNode } from "react";

import { ColumnDef, Table } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

import * as TableRoot from "@ui/table";

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: Table<TData>;
}

function TableComponent<TData, TValue>({
  data,
  columns,
}: Props<TData, TValue>): ReactNode {
  return (
    <TableRoot.Table>
      <TableRoot.TableHeader>
        {data.getHeaderGroups().map((headerGroup) => (
          <TableRoot.TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableRoot.TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableRoot.TableHead>
              );
            })}
          </TableRoot.TableRow>
        ))}
      </TableRoot.TableHeader>
      <TableRoot.TableBody>
        {data.getRowModel().rows?.length ? (
          data.getRowModel().rows.map((row) => (
            <TableRoot.TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableRoot.TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableRoot.TableCell>
              ))}
            </TableRoot.TableRow>
          ))
        ) : (
          <TableRoot.TableRow>
            <TableRoot.TableCell
              colSpan={columns.length}
              className="h-24 text-center"
            >
              No results.
            </TableRoot.TableCell>
          </TableRoot.TableRow>
        )}
      </TableRoot.TableBody>
    </TableRoot.Table>
  );
}

export default TableComponent;
