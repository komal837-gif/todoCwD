import { Component , Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.css']
})
export class GetConfirmComponent implements OnInit {

  getMsg !: string
  constructor(
    private _matDialogRef : MatDialogRef<GetConfirmComponent>,
    @Inject (MAT_DIALOG_DATA) msg : string
  ) { 
    this.getMsg = msg
  }

  ngOnInit(): void {
  }

  onClose(flag:boolean){
    this._matDialogRef.close(flag)
  }

}
