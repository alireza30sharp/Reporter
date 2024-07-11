import { Component, Input, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Detail } from "../../../report/interface/contarct";
import { CustomPaginator } from "../../services/custom-paginator";

@Component({
  selector: "ngx-table-mobile",
  templateUrl: "./table-mobile.component.html",
  styleUrls: ["./table-mobile.component.scss"],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
})
export class TableMobileComponent {
  constructor() {}
  @Input() class: string;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @Input() set data(list: Array<any>) {
    this.dataSource = new MatTableDataSource(list);
    this.totalMeghdar = list.reduce((sum, detail) => sum + +detail.meghdar, 0);
    this.totalTotalAmount = list.reduce(
      (sum, detail) => sum + detail.totalAmount,
      0
    );
    this.totalDiscountAmount = list.reduce(
      (sum, detail) => sum + detail.discountAmount,
      0
    );
    this.totalValueAddedAmount = list.reduce(
      (sum, detail) => sum + detail.valueAddedAmount,
      0
    );
    this.totalnetAmountRow = list.reduce(
      (sum, detail) => sum + detail.netAmountRow,
      0
    );
    this.totalcomplicationsAmount = list.reduce(
      (sum, detail) => sum + detail.complicationsAmount,
      0
    );
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalMeghdar = 0;
  totalTotalAmount = 0;
  totalDiscountAmount = 0;
  totalValueAddedAmount = 0;
  totalnetAmountRow = 0;
  totalcomplicationsAmount = 0;
  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true,
  };
  displayedColumns = [
    "productName",
    "meghdar",
    "unitAmount",
    "totalAmount",
    "discountPercent",
    "discountAmount",
    "valueAddedPercentage",
    "valueAddedAmount",
    "complicationsPercentage",
    "complicationsAmount",
    "netAmountRow",
  ];

  dataSource: MatTableDataSource<Detail>;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
