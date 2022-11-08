export type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

export interface Size {
    width: number;
    height: number;
}

export interface Position {
    x: number;
    y: number;
}

export type SchemaId = string & { readonly __schemaId: never };
export type InputId = string & { readonly __inputId: never };
export type OutputId = string & { readonly __outputId: never };

export type TensorDevice = 'cpu' | 'cuda';
export type TensorDType =
    | 'float32'
    | 'float16'
    | 'int32'
    | 'int16'
    | 'int8'
    | 'bool';

export interface Tensor {
    readonly id: string;
    readonly label: string;
    readonly info: {
        readonly shape: number[];
        readonly dtype: TensorDType;
    }
    readonly device: TensorDevice;
}



