import { Component, EventEmitter, InjectableDecorator, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges{
  isInEditMode:boolean = false;
  @ViewChild ('todoForm') todoForm !: NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() getEditTodo !: Itodo
  @Output() emitUpdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor() { }
  
ngOnChanges(changes: SimpleChanges): void {
  if(!!changes ['getEditTodo'] ['currentValue']){
    this.isInEditMode  = true
    this.todoForm.form.patchValue(changes['getEditTodo']['currentValue'])
  }
 
 }



  ngOnInit(): void {
    // setTimeout(()=>{
    //   console.log(this.todoForm)
    // },0)
  }
  onTodoAdd(){
    if(this.todoForm.valid){
        let todo:Itodo={
      ...this.todoForm.value,
      todoId:Date.now().toString()
    }
    this.todoForm.reset()
    console.log(todo)
    this.emitNewTodo.emit(todo)
  
    }
  }

  onUpdate(){
    if(this.todoForm.valid){
      let UPDATED_OBJ:Itodo={
        ...this.todoForm.value,
        todoId:this.getEditTodo.todoId
      }
       this.emitUpdateTodo.emit(UPDATED_OBJ)
       this.isInEditMode=false
       this.todoForm.reset()
    }
  }
}

  