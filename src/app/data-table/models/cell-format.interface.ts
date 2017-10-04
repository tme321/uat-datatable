import { DynamicCellFormat } from "./dynamic-cell-format";

/**
 * Describes how a cell will be rendered inside
 * the data table.
 * 
 * contentPath: the path, if set, will be read as a string
 * that represents the path to the data the cell should
 * display seperated by .'s.
 * 
 * Example:
 *    Given a row of data { a: { b: { c: 1 } } } the 
 *    contentPath set to "a.b.c" will result in the 
 *    value "1" being displayed inside the table cell.
 * 
 * dynamicFormat: TBD but eventually it will describe
 * a dynamic component to render instead of the default
 * contentPath value.
 * 
 */
export interface CellFormat {
    contentPath?: string;
    dynamicFormat?: DynamicCellFormat;
}
