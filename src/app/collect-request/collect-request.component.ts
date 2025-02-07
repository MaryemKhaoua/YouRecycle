import { Component, OnInit } from '@angular/core';
import { CollectionRequestService } from '../core/services/collection-request/collection-request.service';
import { CollectionRequest, CollectionStatus } from '../core/models/collection-request.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collect-request',
  templateUrl: './collect-request.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./collect-request.component.css'],
  
})
export class CollectRequestComponent implements OnInit {
  requests: CollectionRequest[] = [];
  selectedRequest: CollectionRequest | null = null;
  modalOpen = false;

  constructor(private collectionRequestService: CollectionRequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requests = this.collectionRequestService.getAllRequests();
  }

  getBadgeClass(status: CollectionStatus): string {
    switch (status) {
      case CollectionStatus.PENDING:
        return 'bg-warning';
      case CollectionStatus.COMPLETED:
        return 'bg-success';
      case CollectionStatus.CANCELLED:
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  openCreateModal(): void {
    this.selectedRequest = {
      id: 0,
      estimatedWeight: 0,
      address: '',
      city: '',
      collectionDate: new Date(),
      timeSlot: '',
      status: CollectionStatus.PENDING,
      items: [],
      createdAt: new Date(),
    };
  }



  openEditModal(request: CollectionRequest): void {
    this.selectedRequest = { ...request };
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedRequest = null;
  }

  submitRequest(request: CollectionRequest): void {
    if (request.id) {
      this.collectionRequestService.updateRequest(request.id, request);
    } else {
      this.collectionRequestService.createRequest(request);
    }
    this.loadRequests();
    this.closeModal();
  }

  deleteRequest(id: number): void {
    this.collectionRequestService.deleteRequest(id);
    this.loadRequests();
  }
}