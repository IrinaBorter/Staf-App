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

    deletePosition(position: Position): Promise<any> {
        return this.http.delete('/api/positions/delete', { body: { id: position.id } })
            .toPromise()
            .then(response => response);
    }

    proposeCandidate(position: Position, candidate: any) {
        return this.http.put('/api/positions/propose', { position, candidate })
            .toPromise()
            .then(response => response);
    }

    preselectCandidate(position: Position, candidate: any) {
        return this.http.put('/api/positions/preselect', { position, candidate })
            .toPromise()
            .then(response => response);
    }
}
