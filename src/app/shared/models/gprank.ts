import { Igprank } from './Igprank';

export class GpRank implements Igprank{
    rank: string;
    name: string;
    gp: string;
    num99s: string;
    pets: string;
    updt_dt_tm: string;

    constructor(rank: string, name: string, gp: string, num99s: string, pets: string, updt_dt_tm: string) {
        this.rank = rank;
        this.name = name;
        this.gp = gp;
        this.num99s = num99s;
        this.pets = pets;
        this.updt_dt_tm = updt_dt_tm;
    }

    public toString() {
        return JSON.stringify(this);
    }

}
