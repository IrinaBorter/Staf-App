import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Position } from './position';

@Injectable()
export class PositionService {
    constructor(private http: Http) {}

    getPositions(): Promise<Position[]> {
        return this.http.get('/api/positions')
            .toPromise()
            .then(response => response.json() as Position[]);
    }

    getPosition(id: number): Promise<Position> {
        return this.http.get(`/api/positions/${id}`)
            .toPromise()
            .then(response => response.json() as Position);
    }

    createPosition(position: Position) {
        return this.http.post('/api/positions/create', { position })
            .toPromise()
            .then(response => response.json());
    }

    updatePosition(position: Position): Promise<any> {
        return this.http.put('/api/positions/edit', { position })
            .toPromise()
            .then(response => response);
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
