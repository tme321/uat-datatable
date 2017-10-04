import { HeaderCellFormat } from "./header-cell-format.interface";
import { CellFormat } from "./cell-format.interface";

/**
 * A column definition contains the information
 * necessary for a data table to render.
 * 
 * cellFormat: the format a body cell inside the specified
 * column will use.
 * 
 * headerCellFormat: the format the header cell of the column
 * will use.
 * 
 * footerCellFormat: the format the footer cell of the column 
 * will use. 
 */
export interface Column {
    cellFormat: CellFormat;
    headerCellFormat: HeaderCellFormat;
    footerCellFormat?: CellFormat;
}
