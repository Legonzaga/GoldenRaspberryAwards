export class Min {
    producer!: string;
    interval!: number;
    previousWin!: number;
    followingWin!: number;
  }
  
  export class Max {
    producer!: string;
    interval!: number;
    previousWin!: number;
    followingWin!: number;
  }
  
  export class Interval {
    min!: Min[];
    max!: Max[];
  }
  
  