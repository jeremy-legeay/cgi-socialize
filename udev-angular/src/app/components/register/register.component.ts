import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Article} from '../../models/article';
import {ArticleRepository} from '../../services/article.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'ngu-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  articleForm: FormGroup;

  title = '';
  image = '';
  message = '';
  author = '';

  titleFormControl = new FormControl('',[
    Validators.required
  ]);
  imageFormControl = new FormControl('',[
    Validators.required
  ]);
  messageFormControl = new FormControl('',[
    Validators.required
  ]);
  authorFormControl = new FormControl('',[
    Validators.required
  ]);

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router, private articleService: ArticleRepository ) {
    this.articleForm = this.formBuilder.group({
      title: '',
      image: '',
      message: '',
      author: this.formBuilder.group({
        id: ''
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(data: Article) {
    console.log(data);
    if (this.isFormComplete(data)) {
      this.articleService.add(data)
        .subscribe(() => {
          this.articleForm.reset();
          this.openSnackBar('Le sujet a été ajouté');
        });
    }
  }

  private isFormComplete(data: Article) {
    return data && (data.title && data.message && data.author);
  }

  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Redirection', {
      duration: 500,
    }).afterDismissed().subscribe(null, null, () => {
      this.router.navigate(['/library']);
    });
  }

}
