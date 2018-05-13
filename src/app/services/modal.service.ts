import { Injectable } from '@angular/core';
/**
 * Service to handle modal uses
 *
 * @class ModalService
 */
@Injectable()
export class ModalService {
  private modal;

/**
 * Registers a modal to be used in the service
 *
 * @returns registereted modal component
 */
 registerModal(newComponent) {
   this.modal = newComponent;
 }

 /**
 * Registers a modal to be used in the service
 *
 * @returns registereted modal component
 */
showModal(showCondition: boolean, type: number) {
  this.modal.displayModal(showCondition, type);
 }

}
