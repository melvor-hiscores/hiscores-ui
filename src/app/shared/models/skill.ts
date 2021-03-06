export class Skill {
    public id: string;
    public name: string;
    public imgPath: string;

    constructor(id: string, name: string, imgPath: string) {
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
    }

    static readonly GP_INDEX = 0;
    static readonly TOTAL_INDEX = 1;
    static readonly ATTACK_INDEX = 2;
    static readonly STRENGTH_INDEX = 3;
    static readonly DEFENCE_INDEX = 4;
    static readonly HITPOINTS_INDEX = 5;
    static readonly RANGED_INDEX = 6;
    static readonly MAGIC_INDEX = 7;
    static readonly PRAYER_INDEX = 8;
    static readonly SLAYER_INDEX = 9;
    static readonly WOODCUTTING_INDEX = 10;
    static readonly FISHING_INDEX = 11;
    static readonly FIREMAKING_INDEX = 12;
    static readonly COOKING_INDEX = 13;
    static readonly MINING_INDEX = 14;
    static readonly SMITHING_INDEX = 15;
    static readonly THIEVING_INDEX = 16;
    static readonly FARMING_INDEX = 17;
    static readonly FLETCHING_INDEX = 18;
    static readonly CRAFTING_INDEX = 19;
    static readonly RUNECRAFTING_INDEX = 20;
    static readonly HERBLORE_INDEX = 21;
}
