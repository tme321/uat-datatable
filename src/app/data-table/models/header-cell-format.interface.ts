import { DynamicCellFormat } from "./dynamic-cell-format";

/**
 * Describes how a header cell will be
 * rendered inside the header of the table.
 * 
 * content: a string that will be displayed
 * inside the header cell.
 * 
 * dynamicFormat: TBD, see CellFormat 
 */
export interface HeaderCellFormat {
    content: String;
    dynamicFormat?: DynamicCellFormat;
}
