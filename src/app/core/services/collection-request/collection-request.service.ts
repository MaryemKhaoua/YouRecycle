import { Injectable } from '@angular/core';
import { CollectionRequest } from '../../models/collection-request.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionRequestService {
  private readonly storageKey = 'collectionRequests';

  constructor() {}

  getAllRequests(): CollectionRequest[] {
    const requestsJson = localStorage.getItem(this.storageKey);
    return requestsJson ? JSON.parse(requestsJson) : [];
  }

  getRequestById(id: number): CollectionRequest | undefined {
    const requests = this.getAllRequests();
    return requests.find((request) => request.id === id);
  }

  createRequest(request: CollectionRequest): void {
    const requests = this.getAllRequests();
    request.id = this.generateId(requests);
    requests.push(request);
    this.saveRequests(requests);
  }

  updateRequest(id: number, updatedRequest: CollectionRequest): void {
    const requests = this.getAllRequests();
    const index = requests.findIndex((request) => request.id === id);
    if (index !== -1) {
      requests[index] = { ...updatedRequest, id };
      this.saveRequests(requests);
    }
  }

  deleteRequest(id: number): void {
    const requests = this.getAllRequests().filter((request) => request.id !== id);
    this.saveRequests(requests);
  }

  private saveRequests(requests: CollectionRequest[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(requests));
  }

  private generateId(requests: CollectionRequest[]): number {
    return requests.length > 0 ? Math.max(...requests.map((r) => r.id)) + 1 : 1;
  }
}