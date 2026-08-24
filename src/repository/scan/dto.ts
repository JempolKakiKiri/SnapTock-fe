import { toNumber, type ProductDto} from "../../shared/repository/dto.ts";

export interface ScannedProductDto extends ProductDto {
  receipt_qty: number;
}

export interface ScanNotePayload {
  image: File;
}

export const normalizeScannedProduct = (
  raw: ScannedProductDto,
): ScannedProductDto => ({
  ...raw,
  price: toNumber(raw.price),
  current_stock: toNumber(raw.current_stock),
  receipt_qty: toNumber(raw.receipt_qty),
});

export const getItemSubtotal = (item: ScannedProductDto): number =>
  item.price * item.receipt_qty;

export const getScanTotal = (items: ScannedProductDto[]): number =>
  items.reduce((sum, item) => sum + getItemSubtotal(item), 0);

export const isNewProduct = (item: ScannedProductDto): boolean =>
  item.current_stock === item.receipt_qty;