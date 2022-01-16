import { Component,TemplateRef,
  ViewChild, AfterViewChecked,
  AfterViewInit,ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{


  public title = 'Todoapp';
  public today = new Date();
  public price = 999;

  @ViewChild('username', { read: ElementRef })
  userName!: ElementRef<HTMLInputElement>;

  

  ngAfterViewInit(): void {
    console.log(this.userName);
    this.userName.nativeElement.focus();
  }


  getName(name: string) {
    console.log(name);
    // this.visible = true;
    // setTimeout(()=>{
    //   console.log(this.userName);
    //   this.userName.elementRef.nativeElement.focus();
    // })
  }


  
}


