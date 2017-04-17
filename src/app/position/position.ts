export class Position {
    id: number;
    code: string;
    role: string;
    project: string;
    salary: number;
    description: string;
    primarySkill: string;
    positionStatus: string;
    candidates: Array<string>;
    plannedStartDate: Date;
}