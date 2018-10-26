import { BoardService } from './../board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: []
})
export class BoardComponent implements OnInit {

  boards = [];
  constructor(
    private boardService: BoardService
  ) { }

  async ngOnInit() {
    await this.getBoard();
  }

  async getBoard() {
    try {
      const rs: any = await this.boardService.getBoards();
      if (rs.ok) {
        this.boards = rs.rows;
      }
    } catch (error) {
      console.log(error);

    }
  }
}
