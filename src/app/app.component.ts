import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wakewell';
  path_active:string = '';

  public constructor(private route: ActivatedRoute,private titleService: Title) { }
  ngOnInit():void{
    console.log(this.route.snapshot)
    this.path_active = this.route.snapshot.data['name'];
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);

  }
  
}
