import { Tensor } from "../../common-types";

export interface TensorInputProps {
    readonly id: string;
    readonly inputData: Tensor;
    readonly optional: boolean;
}