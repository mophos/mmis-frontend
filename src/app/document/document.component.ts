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
    const url = `${this.apiUrl}/template/template.xlsx`;
    window.open(url, '_blank');
  }

  downloadTemplateBlank() {
    const url = `${this.apiUrl}/template/template_blank.xlsx`;
    window.open(url, '_blank');
  }

  downloadManualModule() {
    const url = `${this.apiUrl}/pdf/manual_module.pdf`;
    window.open(url, '_blank');
  }

  downloadManualIssueHosxp() {
    const url = `${this.apiUrl}/pdf/issueHosXP.pdf`;
    window.open(url, '_blank');
  }

  downloadManualMigrateDosToMMIS() {
    const url = `${this.apiUrl}/pdf/InvDosToMMIS.pdf`;
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

  downloadSQLDemo() {
    const url = `${this.apiUrl}/sql/mmis_demo.sql`;
    window.open(url, '_blank');
  }

  downloadIssueHis() {
    const url = `${this.apiUrl}/template/issueHis.xls`;
    window.open(url, '_blank');
  }

  downloadIssueAdmin() {
    const url = `${this.apiUrl}/template/issueAdmin.xls`;
    window.open(url, '_blank');
  }

  downloadTeamViewer() {
    const url = `${this.apiUrl}/program/teamviewerV13.zip`;
    window.open(url, '_blank');
  }

  downloadCentOS7() {
    const url = `https://drive.google.com/file/d/1pyX7LxGWhIZOjnPNqQRSbkzvus-HHMdX/view?usp=sharing`;
    window.open(url, '_blank');
  }

  downloadDockerInstall() {
    const url = `${this.apiUrl}/pdf/dockerInstall.pdf`;
    window.open(url, '_blank');
  }

  downloadDockerComposeInstall() {
    const url = `${this.apiUrl}/pdf/dockerComposeInstall.pdf`;
    window.open(url, '_blank');
  }

  downloadLastInstallCentOS() {
    const url = `${this.apiUrl}/pdf/lastInstallCentOS.pdf`;
    window.open(url, '_blank');
  }

  downloadNavicat() {
    const url = `https://www.navicat.com/en/download/navicat-for-mysql`;
    window.open(url, '_blank');
  }

}
