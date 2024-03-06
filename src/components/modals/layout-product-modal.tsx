import { ReactNode, useState } from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

import { Button } from "@ui/button";
import * as CommandRoot from "@ui/command";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import * as PopRoot from "@ui/popover";
import { Textarea } from "@ui/textarea";

import { cn } from "@lib/utils";

const data = [
  {
    value: "lanches",
    label: "Lanches",
  },
  {
    value: "pizzas",
    label: "Pizzas",
  },
  {
    value: "bebidas",
    label: "Bebidas",
  },
  {
    value: "sorvetes",
    label: "Sorvetes",
  },
];

const LayoutProductModal = (): ReactNode => {
  const [openCategory, setOpenCategory] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");

  return (
    <div className="bg-white py-10 px-8 rounded-md border-2 border-zinc-700">
      <form>
        <h2 className="text-4xl text-violet-600 font-semibold">
          Adicionar novo produto
        </h2>
        <p className="text-md text-zinc-600">
          Preeencha as informações para adicionar um novo produto.
        </p>
        <div className="py-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6">
            <div className="col-span-1">
              <Label>Escolha uma imagem</Label>
              <Input
                className="cursor-pointer hover:border-violet-600"
                type="file"
              />
            </div>
            <div className="col-span-1">
              <Label>Selecione uma categoria</Label>
              <PopRoot.Popover
                open={openCategory}
                onOpenChange={setOpenCategory}
              >
                <PopRoot.PopoverTrigger className="w-full justify-end" asChild>
                  <Button variant="outline" role="combobox">
                    {categoryValue
                      ? data.find((item) => item.value === categoryValue)?.label
                      : "Select framework..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopRoot.PopoverTrigger>
                <PopRoot.PopoverContent align="end" className="p-4">
                  <CommandRoot.Command>
                    <CommandRoot.CommandInput
                      placeholder="Pesquisar Categoria..."
                      className="h-9"
                    />
                    <CommandRoot.CommandEmpty>
                      Categoria não encontrada
                    </CommandRoot.CommandEmpty>
                    <CommandRoot.CommandGroup>
                      {data.map((item) => (
                        <CommandRoot.CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setCategoryValue(
                              currentValue === categoryValue
                                ? ""
                                : currentValue,
                            );
                            setOpenCategory(false);
                          }}
                        >
                          {item.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              categoryValue === item.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandRoot.CommandItem>
                      ))}
                    </CommandRoot.CommandGroup>
                  </CommandRoot.Command>
                </PopRoot.PopoverContent>
              </PopRoot.Popover>
            </div>
            <div className="flex flex-col space-y-1.5 col-span-1 ">
              <Label>Nome do produto</Label>
              <Input
                placeholder="ex: X-frango..."
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
              />
            </div>
            <div className="flex flex-col space-y-1.5 col-span-1">
              <Label>Preço do produto</Label>
              <Input
                type="number"
                placeholder="ex: 99.10"
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500"
              />
            </div>
            <div className="flex flex-col space-y-1.5 col-span-2">
              <Label>Descrição do produto</Label>
              <Textarea
                placeholder="Digite a descrição do produto..."
                className="focus-visible:border-violet-500 focus-visible:ring-violet-500 min-h-[112px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            className="text-zinc-800 hover:bg-zinc-200"
          >
            Cancelar
          </Button>
          <Button type="submit" className="bg-violet-600 hover:bg-violet-800">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LayoutProductModal;
