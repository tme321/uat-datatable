import { DynamicCellFormat } from "./dynamic-cell-format";

/**
 * Describes how a header cell will be
 * rendered inside the header of the table.
 * 
 */
export interface HeaderCellFormat {
    
    /**
     * A string that will be displayed
     * inside the header cell.
     *
     */
    content: String;

    /**
     * TBD, see CellFormat
     */
    dynamicFormat?: DynamicCellFormat;
}
