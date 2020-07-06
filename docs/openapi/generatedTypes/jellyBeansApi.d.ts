 export namespace Paths {
    export namespace GetJellyBeansList {
        export interface IQueryParameters {
            color?: Parameters.IColor;
        }
        export namespace Parameters {
            /**
             * The available Jelly Bean colors.
             * example:
             * yellow
             */
            export type IColor = "red" | "green" | "blue" | "yellow" | "orange" | "purple" | "rainbow";
        }
        export namespace Responses {
            /**
             * JSON representation of a list of Jelly Beans.
             */
            export interface I200 {
                jelly_beans: {
                    /**
                     * The unique ID (UUID) of this Jelly Bean.
                     * example:
                     * cf988dc2-831c-471a-bc98-33cc6711724d
                     */
                    id: string;
                    /**
                     * The available Jelly Bean colors.
                     * example:
                     * yellow
                     */
                    color: "red" | "green" | "blue" | "yellow" | "orange" | "purple" | "rainbow";
                }[];
            }
        }
    }
}
