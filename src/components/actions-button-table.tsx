import { ReactNode, useState } from "react";

import { MoreHorizontal } from "lucide-react";

import * as PopRoot from "@components/ui/popover";

import { Button } from "./ui/button";

interface Props {
  paymentId: string;
  editButton: ReactNode;
  deleteButton: ReactNode;
}

export const ActionsButtonTable = ({
  paymentId,
  editButton,
  deleteButton,
}: Props): ReactNode => {
  const [open, setOpen] = useState(false);

  return (
    <PopRoot.Popover open={open} onOpenChange={setOpen}>
      <div className="w-full flex justify-end">
        <PopRoot.PopoverTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4 text-zinc-600" />
          </Button>
        </PopRoot.PopoverTrigger>
        <PopRoot.PopoverContent
          className=" border border-zinc-400 rounded-md w-[148px] bg-zinc-50 p-2"
          align="end"
        >
          <div className="px-2 py-0.5">Opções</div>
          <div className="flex flex-col">
            <Button
              className="w-full px-4 justify-between hover:bg-zinc-200"
              onClick={() => navigator.clipboard.writeText(paymentId)}
              variant="ghost"
            >
              Copiar ID
            </Button>
            <Button
              asChild
              className="w-full px-4 justify-between hover:bg-zinc-200 flex"
              variant="ghost"
            >
              {editButton}
            </Button>
            <Button
              className="w-full px-4 justify-between hover:bg-zinc-200"
              variant="ghost"
            >
              {deleteButton}
            </Button>
          </div>
        </PopRoot.PopoverContent>
      </div>
    </PopRoot.Popover>
  );
};
