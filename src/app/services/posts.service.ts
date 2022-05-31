import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: IPost[] = [
    {title: 'Post 1', text: 'Some text for post 1', id: 11},
    {title: 'Post 2', text: 'Some text for post 2', id: 12},
    {title: 'Post 3', text: 'Some text for post 3', id: 13},
    {title: 'Post 4', text: 'Some text for post 4', id: 14},
    {title: 'Post 5', text: 'Some text for post 5', id: 15}
  ]
  
  getById(id: number){
    return this.posts.find(p => p.id == id)
  }
}
