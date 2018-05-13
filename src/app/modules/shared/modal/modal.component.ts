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

  displayModal(show: boolean, type: number) {
    this.showModal = show;
    this.type = type;
  }
}
