import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false

  constructor(public postsService: PostsService,public route: ActivatedRoute, public router: Router ) { 
    
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe( (params) => {

      this.showIds = !!(params['showIds'] as string) 
      
    })
  }

  showIdsProgram(){
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true
      }
    })
  }

}
