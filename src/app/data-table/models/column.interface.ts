import { HeaderCellFormat } from "./header-cell-format.interface";
import { CellFormat } from "./cell-format.interface";

/**
 * A column definition contains the information
 * necessary for a data table to render.
 * 
 */
export interface Column {
    /**
     * The format a body cell inside the specified
     * column will use.
     *
     */
    cellFormat: CellFormat;

    /**
     * The format the header cell of the column
     * will use.
     *
     */
    headerCellFormat: HeaderCellFormat;

    /**
     * The format the footer cell of the column 
     * will use. 
     *
     */
    footerCellFormat?: CellFormat;
}
