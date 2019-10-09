import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  searchKey = '';
  articles;
  constructor(private news:NewsService) {}

  ngOnInit()
  {
    this.news.getNews().subscribe((news)=>{
      // console.log(news);
       this.articles = news['articles'];
    });
  }

  openWebSite(url:string)
  {
    // console.log(url);
    window.open(url,'_blank');
  }

}
