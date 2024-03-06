import { useSearchParams } from "next/navigation";

import { CloseModal } from "./close-modal";
import FormTenantModal from "./form-tenant-modal";
import LayoutProductModal from "./layout-product-modal";

export const ModalProvider = () => {
  const searchParams = useSearchParams();

  searchParams.get("modal");
  const modalState = searchParams.get("modal-state");
  const modalType = searchParams.get("modal-type");

  return (
    <>
      {modalState === "open" && (
        <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-40">
          <CloseModal />
          <div className="relative z-50 max-w-[616px]">
            {modalType === "product" && <LayoutProductModal />}
            {modalType === "tenant" && <FormTenantModal />}
          </div>
        </div>
      )}
    </>
  );
};
