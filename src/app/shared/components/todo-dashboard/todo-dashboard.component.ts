import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArr:Array<Itodo>=[
    {
      todoItem:"js",
      todoId:"101"
    },
    {
      todoItem:"ts",
      todoId:"102"
    },
    {
      todoItem:"angular",
      todoId:"103"
    },
    {
      todoItem:"css",
      todoId:"104"
    }
  ]

 editTodo !: Itodo
  constructor(private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  getNewTodo(todo:Itodo){
    this.todoArr.unshift(todo)
    this._snackBar.open(`The to item with id ${todo.todoId} is added successfully!!`,'Close',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
  }

  getRemoveId(id:string){
    let getIndex = this.todoArr.findIndex(todo=>todo.todoId === id)
    this.todoArr.splice(getIndex,1)
    this._snackBar.open(`The todo item with id ${id} is removed successfully!!`,'Close',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      })
  }

  getEditTodo(todo:Itodo){
    this.editTodo = todo
  }

  geUpdatedTodo(todo:Itodo){
    let getIndex = this.todoArr.findIndex(t=> t.todoId === todo.todoId)
    this.todoArr[getIndex] = todo
     this._snackBar.open(`The todo item with id ${todo.todoId} is updated successfully!!`,'Close',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      })
  }

}
