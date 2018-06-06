import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { ComponentType } from '../../../enums/component-type.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  showModal = false;
  type: number;
  componentType = ComponentType;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  /**
   *This function displays the modal based on the type of
   * parameters passed to it
   *
   * @param {boolean} show
   * @param {number} type
   * @memberof ModalComponent
   */
  displayModal(show: boolean, type: number) {
    this.showModal = show;
    this.type = type;
  }
}
