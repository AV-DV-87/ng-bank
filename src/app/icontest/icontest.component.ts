import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ErrorStateMatcher, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {OPERATOR_INFO} from '../../assets/fake-data';




export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}




@Component({
  selector: 'app-icontest',
  // animations : ['growInOut'],
  templateUrl: './icontest.component.html',
  providers: [CustomErrorStateMatcher],
  styleUrls: ['./icontest.component.scss']
})
export class IcontestComponent implements AfterViewInit {
  // pour le formulaire test login
  public password = '';
  public login = '';
  // pour le datePicker
  public startDate = new Date();
  // source de données pour le test TABLE
  public dataSource = new MatTableDataSource(OPERATOR_INFO);
  // vue "enfant" contenant notre barre de pagination
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(public customErrorStateMatcher: CustomErrorStateMatcher) { }

  // TODO voir le lifecycle pour utilisation de AfterViewInit
  ngAfterViewInit() {
    //initialisation des paginator et bouton de tri après chargement des données
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
