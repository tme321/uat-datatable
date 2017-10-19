/**
 * Format for the data needed to instantiate a
 * component dynamically
 */
export interface DynamicComponentData {
    /**
     * The component function or class
     * or the string name of the same
     */
    component: any | string,

    /**
     * The list of providers specific 
     * for this component
     */
    providers?: any[],

    /**
     * Any members to set on the
     * controller of the component
     * to the specified value on 
     * instantiation
     */
    inputs?: { [name: string]: any }
};
