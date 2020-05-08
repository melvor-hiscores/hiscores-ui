export class Rank {
    rank: string;
    name: string;
    level: string;
    xp: string;
    updt_dt_tm: string;

    constructor(rank: string, name: string, level: string, xp: string, updt_dt_tm: string) {
        this.rank = rank;
        this.name = name;
        this.level = level;
        this.xp = xp;
        this.updt_dt_tm = updt_dt_tm;
    }

}
