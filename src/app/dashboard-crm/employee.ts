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


export interface IBTSCard {
    colorDark: string,
    colorLight: string,
    status: string,
    max: number,
    icon: string,
    message : string
    istoggel : boolean
    checked : boolean
    disabled: boolean
    toggelcolor: string
  
}


export interface IDevices {
    id: string,
    name: string,
    long: number,
    lat: number,
    alarmStatus: string,

  
}