import {Component} from '@angular/core';
import {ITask} from './Task';
import {DomSanitizer, SafeHtml, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName = 'Sugerowane codzienne zadanie';
  taskDate: string;
  readonly notSanitizedScript = '<script>alert(1)</script>';
  readonly sanitizedScript: any;
  // taskName: string;
  focusExample: string
  config: { [key: string]: string | Date } = null;
  tasks: Array<ITask> = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];
  blackDiv: 'red';
  // ngModel działa na zasadzie property binding i event binding
  // ngModel działa tylko z elementami formularza jak input, textarea, select
  // z pomocą ControlValueAccessor można samemu stworzyć rozbudowane elementy formularzy
  exampleName: string; //Przykład własnego ngModel

  clearTasks(): void {
    this.tasks = [];
  }

  constructor(private sanitizer: DomSanitizer) {

    this.sanitizedScript = sanitizer.bypassSecurityTrustHtml('<script>console.log(1)</script>');

    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date(),
      };
    }, 500);
  }

  onKeyUp($event: KeyboardEvent) {
    // każdy event generuje obiekt pod zmienną $event
    // bez rzutowania, pole value nie byłoby widoczne
    const target = $event.target as HTMLInputElement;
    // this.taskName = target.value;
  }

  createTask(): void {
    const task: ITask = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    }
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }

  createTask2(): void {
    alert('createTask2');
  }


  ownNgModel() {
    this.exampleName = '';
  }
}
