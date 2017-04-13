import { Injectable } from '@angular/core';

import { Position } from './position';

@Injectable()
export class PositionService {
    constructor() {}

    getPositions(): Promise<Position[]> {
        return Promise.resolve(positions);
    }

    getPosition(id: number) {
        const position = positions.find(p => p.id === id);
        return Promise.resolve(position);
    }
}

const positions: Position[] = [
    {
        id: 1,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 2,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 3,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 4,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 5,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 6,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 7,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 8,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 9,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
    {
        id: 10,
        code: '1-FG-34',
        role: 'Junior Software Engineer',
        project: 'Staffing Desk',
        salary: 1000,
        primarySkill: 'JS',
        positionStatus: 'Open',
        candidates: [],
        plannedStartDate: new Date('05-10-2017'),
        description: 'Very useful description blabla blabla blabla blabla blabla blabla.',
    },
];
