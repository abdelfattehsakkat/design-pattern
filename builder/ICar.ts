export interface ICar {
    model: string | undefined;
    color: string | undefined;
    engine: string | undefined;
    custumization?: string;
    drive(): void;    
}

export interface ICarConfiguration {
    model: string;
    color: string;
    engine: string;
    custumization?: string;
}