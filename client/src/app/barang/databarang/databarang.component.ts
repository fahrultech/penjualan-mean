import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
declare var $:any;

class Barang{
  kd_barang : string;
  nm_barang : string;
  nm_kategori : string;
  hrg_jual : number;
  stok_toko : number;
  stok_gdg : number;
  lokasi_toko : string;
  lokasi_gudang : string
}

class DataTablesResponse{
  data : any[];
  draw : number;
  recordsFiltered : number;
  recordsTotal : number;
}

@Component({
  selector: 'app-databarang',
  templateUrl: './databarang.component.html',
  styleUrls: ['./databarang.component.css']
})
export class DatabarangComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  barangs : Barang[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: async(dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            '/api/barang/angulardatatables',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.barangs = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [
        { data: 'kd_barang' },
        { data: 'nm_barang' },
        { data: 'nm_kategori' },
        { data: 'hrg_jual' },
        { data: 'stok_toko' },
        { data: 'stok_gdg' },
        { data: 'lokasi_toko' },
        { data: 'lokasi_gudang' }
      ]
    };
    this.tambahBarang;
  }
  tambahBarang(){
    $('#modalTambahBarang').modal('show');
  }




}
