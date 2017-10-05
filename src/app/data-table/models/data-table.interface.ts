import { Column } from "./column.interface";

/**
 * This interface describes the model
 * a UATDataTableComponent will read to
 * compose itself.
 * 
 */
export interface UATDataTable {
    /**
     * An array of column definitions
     */
    columns: Column[];
}
