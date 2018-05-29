import { Component, OnInit, Inject } from '@angular/core';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styles: []
})
export class DocumentComponent implements OnInit {

  apiUrl = '../../assets';
  constructor(
    // @Inject('API_URL') private apiUrl: string
  ) { }

  ngOnInit() {
  }

  downloadManualAdmin() {
    const url = `${this.apiUrl}/pdf/ManualAdmin.pdf`;
    window.open(url, '_blank');
  }

  downloadManualStaff() {
    const url = `${this.apiUrl}/pdf/ManualStaff.pdf`;
    window.open(url, '_blank');
  }

  downloadTemplate() {
    const url = `${this.apiUrl}/pdf/template.xlsx`;
    window.open(url, '_blank');
  }

  downloadTemplateBlank() {
    const url = `${this.apiUrl}/pdf/template_blank.xlsx`;
    window.open(url, '_blank');
  }

  downloadManualModule() {
    const url = `${this.apiUrl}/pdf/manual_module.pdf`;
    window.open(url, '_blank');
  }

  downloadMigrateWin() {
    const url = `${this.apiUrl}/program/MirgrateWindows.zip`;
    window.open(url, '_blank');
  }

  downloadMigrateMac() {
    const url = `${this.apiUrl}/program/MirgrateOSX.zip`;
    window.open(url, '_blank');
  }

  downloadSQLBlank() {
    const url = `${this.apiUrl}/sql/mmis_blank.sql`;
    window.open(url, '_blank');
  }

}
