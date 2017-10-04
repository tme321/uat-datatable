import { Column } from "./column.interface";

/**
 * This interface describes the model
 * a UATDataTableComponent will read to
 * compose itself.
 * 
 * columns: an array of column definitions
 */
export interface UATDataTable {
    columns: Column[];
}
