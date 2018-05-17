export interface IEmployee {
    id: number,
    name: string,
    age: number
}

export interface Issue {
    id: number;
    title: string;
    state: string;
    url: string;
    created_at: string;
    updated_at: string;
  }
  

  export interface IDashCard {
    colorDark: string,
    colorLight: string,
    number: number,
    message: string,
    isdashboard: boolean,
  
}


export interface IGauge {
    stroke: number,
    title: string,
    current: number,
    max: number,
    background: string,
    color : string
    boxcolor : string
  
}


