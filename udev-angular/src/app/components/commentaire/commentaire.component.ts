import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Commentaire} from '../../models/commentaire';
import {CommentaireRepository} from '../../services/commentaire.repository';

@Component({
  selector: 'ngu-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  listeCommentaire: Observable<Commentaire[]>;

  constructor(
    private commentaireService: CommentaireRepository
  ) {
  }

  ngOnInit() {
    this.listeCommentaire = this.commentaireService.all();
  }

}
