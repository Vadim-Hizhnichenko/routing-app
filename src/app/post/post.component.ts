import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPost } from '../interfaces/IPost';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: IPost 

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.post = this.postsService.getById(params['id']) as IPost
    })

  }

  loadPost(){
    this.router.navigate(['/posts', 12])
  }

  

}
