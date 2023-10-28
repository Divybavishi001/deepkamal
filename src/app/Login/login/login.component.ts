import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
//import { CellValueChangedEvent } from 'ag-grid-community';
import { LoaderService } from 'src/app/loader/loader.service';
import { LoginService } from '../login.service';
import { NavbarService } from 'src/app/services/navbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{
  
  public username: string = "ADMIN";
  public password: string = "HP200";
  constructor(public router: Router,
    public loginService : LoginService, 
    private NavbarService: NavbarService){}
  ngOnInit(): void {
    debugger;
    this.loginService.resetData();
    this.NavbarService.hide();
  }
  ngOnDestroy(): void {
    this.NavbarService.display();
  }
  public logIn() {
    debugger;
    //this.loaderService.show();
    console.log("Username = ", this.username);
    console.log("Passwrod = ", this.password);
    let parm = { "userName": this.username, "password": this.password };

    if (this.password == "9999") {
      this.loginService.dbConfing.zBranchCode = "1";
      this.loginService.dbConfing.gAgentYN = "Y";
      
      this.loginService.dbConfing.gAgentCode = this.username;
      this.loginService.dbConfing.UserName = this.username;
      this.loginService.dbConfing.UserType = "User";

      //this.loaderService.hide();
      this.router.navigate(['/AgentLogin'], { skipLocationChange: true });
      
    }

    else {
      this.loginService.loginIn(parm).subscribe(
        data => {

          if (data != null && data["Table1"].length != 0) {
            //console.log(data["Table1"]);
            debugger;
            this.loginService.dbConfing.ACWS = data["Table"][0].ACWS;
            this.loginService.dbConfing.ServerName = data["Table"][0].ServerName;
            this.loginService.dbConfing.DbName = data["Table"][0].DbName;
            this.loginService.dbConfing.DatabaseName = data["Table"][0].DatabaseName;
            this.loginService.dbConfing.UserName = this.username;
            this.loginService.dbConfing.CAdd1 = data["Table"][0].CAdd1;
            this.loginService.dbConfing.CAdd2 = data["Table"][0].CAdd2;
            this.loginService.dbConfing.CAdd3 = data["Table"][0].CAdd3;
            this.loginService.dbConfing.CCity = data["Table"][0].CCity;
            this.loginService.dbConfing.CPhone = data["Table"][0].CPhone;
            this.loginService.dbConfing.fbranch = data["Table"][0].fbranch;
            this.loginService.dbConfing.ZPARTYN = data["Table1"][0].ZPARTYN;
            this.loginService.dbConfing.ZLABOURYN = data["Table1"][0].ZLABOURYN;
            this.loginService.dbConfing.zPassword = data["Table1"][0].zPassword;
            this.loginService.dbConfing.zBranchCode = data["Table1"][0].zBranchCode;
            this.loginService.dbConfing.UserType = data["Table1"][0].UserType;
            this.loginService.dbConfing.WindowState = data["Table1"][0].WindowState;
            this.loginService.dbConfing.version = data["Table"][0].version;

            console.log(this.loginService.dbConfing);
            //this.loaderService.hide();
            
            this.router.navigate(['/connect'], { skipLocationChange: true });
          }
          else {
            alert("Username or Password is incorrect.")
           // this.loaderService.hide();
          }

        });
    }
    //this.router.navigate(['/Vehiclepurchase'], { skipLocationChange: true });

  }
}

