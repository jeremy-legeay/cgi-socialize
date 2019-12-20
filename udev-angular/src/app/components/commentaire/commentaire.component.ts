import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Commentaire} from '../../models/commentaire';
import {CommentaireRepository} from '../../services/commentaire.repository';
import {ActivatedRoute} from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'ngu-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent implements OnInit {
  listeCommentaire: Observable<Commentaire[]>;

  constructor(private route: ActivatedRoute, private commentaireService: CommentaireRepository) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.listeCommentaire = this.commentaireService.all();
      // this.listeCommentaire = this.commentaireService.byArticleId( params.get('article') );
    });
  }

}
