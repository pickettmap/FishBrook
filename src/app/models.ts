export interface Fish {
    name: string;
    url: string;
    id?: string;
    details?: Object;
}

export interface fishDetails {
    SpecCode: string;
    Species: string;
    Fresh: number;
    Brack: number;
    Saltwater: number;
    Dangerous: string;
    PicPrefferedName:string;
    image:string;
}


export interface fishApi {
    count: number;
    data: fishDetails[];
    error: string;
    returned: number;
}