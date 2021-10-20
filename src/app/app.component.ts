import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Cnab } from './domain/cnab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  private host = 'http://localhost:8080/bycoders-api/v1';
  title = 'bycoders-app';

  uploadedFiles: any[] = [];
  registros: Cnab[] = [];

  constructor(
      private messageService: MessageService,
      private http: HttpClient) {}

  ngOnInit(): void {
    this.listar();
  }

  upload(event: any) {
    const formData = new FormData();
    this.registros = [];

    for(let file of event.files) {
        formData.append("file", file);
        this.http.post(`${this.host}/file`, formData)
          .subscribe(() => {
            this.uploadedFiles.push(file);
            this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
            this.listar();
          });
    }
  }

  calularTotalVendas(loja: string) {
    let total = 0;

    if (this.registros) {
        for (let registro of this.registros) {
            if (registro.loja === loja) {
                total += registro.valor;
            }
        }
    }

    return total;
  }

  private listar(): void {
    this.http.get<any>(`${this.host}/cnab`).subscribe(resp => this.registros = resp);
  }
}
